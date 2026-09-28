/**
 * Exports MNLF Facebook page posts via the Graph API and downloads their
 * photography, so newsletter issues can be built from what actually exists.
 * Meta blocks scraping — this is the supported path.
 *
 * Needs FB_PAGE_ID and FB_PAGE_TOKEN in .env
 * Run: node scripts/fetch-fb.mjs [--since 2026-04-01] [--no-images]
 *
 * Writes content/fb-export.json and content/fb-images/
 */
import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs';
import { extname } from 'path';

// No dotenv in this repo; the scripts stay dependency-free.
function loadEnv(path = '.env') {
  if (!existsSync(path)) return;
  for (const line of readFileSync(path, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)$/);
    if (!m) continue;
    const v = m[2].trim().replace(/^["']|["']$/g, '');
    if (!(m[1] in process.env)) process.env[m[1]] = v;
  }
}
loadEnv();

const arg = (name, fallback) => {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? fallback : process.argv[i + 1];
};

const PAGE_ID = process.env.FB_PAGE_ID;
const TOKEN = process.env.FB_PAGE_TOKEN;
const VERSION = process.env.FB_API_VERSION || 'v21.0';
const SINCE = arg('since', '2026-04-01');
const WITH_IMAGES = !process.argv.includes('--no-images');

if (!PAGE_ID || !TOKEN) {
  console.error('Missing FB_PAGE_ID or FB_PAGE_TOKEN in .env — see the token setup notes.');
  process.exit(1);
}

const FIELDS = [
  'id',
  'message',
  'created_time',
  'permalink_url',
  'full_picture',
  'attachments{media,subattachments,type,title,description,target}',
].join(',');

mkdirSync('content/fb-images', { recursive: true });

/** Walks the cursor-paginated posts edge until Graph stops handing back a next page. */
async function fetchAll() {
  let url =
    `https://graph.facebook.com/${VERSION}/${PAGE_ID}/posts` +
    `?fields=${encodeURIComponent(FIELDS)}&limit=100&since=${SINCE}` +
    `&access_token=${encodeURIComponent(TOKEN)}`;
  const posts = [];
  let page = 0;

  while (url) {
    const res = await fetch(url);
    const body = await res.json();
    if (body.error) {
      console.error(`Graph API error (${body.error.type} ${body.error.code}): ${body.error.message}`);
      process.exit(1);
    }
    posts.push(...(body.data || []));
    console.log(`  page ${++page}: ${body.data?.length ?? 0} posts (${posts.length} total)`);
    url = body.paging?.next ?? null;
  }
  return posts;
}

/** full_picture plus every subattachment image, deduped and in post order. */
function imageUrls(post) {
  const urls = [];
  if (post.full_picture) urls.push(post.full_picture);
  for (const a of post.attachments?.data ?? []) {
    if (a.media?.image?.src) urls.push(a.media.image.src);
    for (const s of a.subattachments?.data ?? []) {
      if (s.media?.image?.src) urls.push(s.media.image.src);
    }
  }
  return [...new Set(urls)];
}

async function download(url, base) {
  const res = await fetch(url);
  if (!res.ok) {
    console.warn(`    ! ${res.status} on ${base}`);
    return null;
  }
  const type = res.headers.get('content-type') || '';
  const ext = type.includes('png') ? '.png' : type.includes('webp') ? '.webp' : '.jpg';
  const path = `content/fb-images/${base}${ext}`;
  writeFileSync(path, Buffer.from(await res.arrayBuffer()));
  return path;
}

console.log(`Fetching posts since ${SINCE}…`);
const posts = await fetchAll();

const rows = [];
for (const post of posts) {
  const date = post.created_time.slice(0, 10);
  const urls = imageUrls(post);
  const files = [];

  if (WITH_IMAGES && urls.length) {
    console.log(`  ${date} — ${urls.length} image(s)`);
    for (const [i, url] of urls.entries()) {
      // date-first names so the folder sorts chronologically when reviewing
      const base = `${date}_${post.id.split('_').pop()}_${String(i + 1).padStart(2, '0')}`;
      const path = await download(url, base);
      if (path) files.push(path);
    }
  }

  rows.push({ ...post, date, imageUrls: urls, imageFiles: files });
}

// newest first, matching how the page itself reads
rows.sort((a, b) => b.created_time.localeCompare(a.created_time));
writeFileSync('content/fb-export.json', JSON.stringify(rows, null, 2));

const clip = (s) => (s || '(no message)').replace(/\s+/g, ' ').slice(0, 80);
const pad = (s, n) => String(s).padEnd(n);
console.log(`\n${pad('DATE', 12)}${pad('MESSAGE', 82)}IMAGES`);
console.log('-'.repeat(100));
for (const r of rows) console.log(`${pad(r.date, 12)}${pad(clip(r.message), 82)}${r.imageUrls.length}`);
console.log(
  `\n${rows.length} posts → content/fb-export.json` +
    `\n${rows.reduce((n, r) => n + r.imageFiles.length, 0)} images → content/fb-images/`
);
