<script>
  /**
   * Нийтлэл — a long-form feature. Text-heavy and image-heavy, so the body is a
   * sequence of blocks rather than paragraphs: reading-column text, an inset
   * photograph in the marginalia beside it, a pull quote, a full-bleed plate, a
   * pair, and a closing three-frame gallery. Each image size does a different
   * job, so the page never settles into one repeating image-text pattern.
   */
  import { reveal } from '$lib/reveal.js';
  let { feature, lang = 'mn', tag = null } = $props();
  const f = $derived(feature);

</script>

<article class="feature" id="{f.id}-story" aria-labelledby="{f.id}-heading">
  <header class="opener">
    {#if tag}<p class="label">{tag}</p>{/if}
    <h3 id="{f.id}-heading" class="lede">{f.title[lang]}</h3>
  </header>
  <hr class="rule registered opener-rule" />

  <figure class="plate">
    <img src={f.image} alt={f.alt[lang]} loading="lazy" decoding="async" width="1080" height="619" />
    <figcaption>
      <span class="date">{f.meta[lang]}</span>
      <span class="cap">{f.caption[lang]}</span>
    </figcaption>
  </figure>

  <div class="body">
    {#each f.body as b}
      {#if b.t === 'p'}
        <p class="p" class:lead={b.lead} use:reveal>{b[lang]}</p>
      {:else if b.t === 'inset'}
        <figure class="inset" use:reveal>
          <img src={b.src} alt={b.alt[lang]} loading="lazy" decoding="async" />
          <figcaption class="mono">{b.cap[lang]}</figcaption>
        </figure>
      {:else if b.t === 'quote'}
        <blockquote class="quote" use:reveal>
          <p>“{b[lang]}”</p>
          <footer class="mono">{b.by[lang]}</footer>
        </blockquote>
      {:else if b.t === 'full'}
        <figure class="full" use:reveal>
          <img src={b.src} alt={b.alt[lang]} loading="lazy" decoding="async" />
          <figcaption class="mono">{b.cap[lang]}</figcaption>
        </figure>
      {:else if b.t === 'funnel'}
        <ol class="funnel" use:reveal>
          {#each b.steps as [n, label], k}
            <li style="--k:{k}"><span class="n">{n}</span><span class="l">{label[lang]}</span></li>
          {/each}
        </ol>
      {:else if b.t === 'pair'}
        <div class="pair">
          {#each b.items as it, i}
            <figure use:reveal={i * 90}>
              <img src={it.src} alt={it.alt[lang]} loading="lazy" decoding="async" />
              <figcaption class="mono">{it.cap[lang]}</figcaption>
            </figure>
          {/each}
        </div>
      {:else if b.t === 'gallery'}
        <div class="gallery">
          {#each b.items as it, i}
            <figure class="g{i}" use:reveal={i * 90}>
              <img src={it.src} alt={it.alt[lang]} loading="lazy" decoding="async" />
              <figcaption class="mono">{it.cap[lang]}</figcaption>
            </figure>
          {/each}
        </div>
      {/if}
    {/each}
  </div>
</article>

<style>
  /* One reading column per article. Title, rule, photographs, text and quotes
     all share the same two edges, so nothing floats in half-empty space. */
  /* Articles sit on the master margins: the same column as the nav bar and
     every other section. */
  .feature {
    --col: 100%;
  }

  .opener,
  .opener-rule,
  .plate,
  .body {
    width: var(--col);
    margin-inline: auto;
  }

  /* The section frame supplies the H2 and the top space; the article title
     is the item headline beneath it. */
  .opener {
    padding-bottom: var(--s-5);
  }

  .opener .label {
    margin-bottom: var(--s-2);
  }

  .lede {
    font-family: var(--font-display);
    font-weight: var(--display-weight);
    font-size: var(--t-2xl);
    text-wrap: balance;
  }

  .opener-rule {
    --grid-gap: var(--s-4);
    margin-bottom: var(--s-5);
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  figure {
    margin: 0;
  }

  figcaption {
    color: var(--ink-mute);
    font-size: var(--t-xs);
    line-height: 1.5;
  }

  .plate img {
    aspect-ratio: 16 / 9;
  }

  .plate figcaption {
    display: flex;
    gap: var(--s-3);
    flex-wrap: wrap;
  }

  .plate .date {
    color: #17692a;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }

  .body {
    padding-top: var(--s-6);
  }

  .body::after {
    content: '';
    display: block;
    clear: both;
  }

  .p {
    font-size: var(--t-md);
    line-height: 1.6;
    text-wrap: pretty;
  }

  .p + .p {
    margin-top: var(--s-4);
  }

  .lead {
    font-family: var(--font-display);
    font-size: var(--t-lg);
    line-height: 1.3;
    letter-spacing: -0.01em;
    margin-bottom: var(--s-5);
  }

  /* Inset: set into the text, right, the way a magazine runs a small photo. */
  .inset {
    float: right;
    width: 40%;
    margin: 0.4rem 0 var(--s-4) var(--s-5);
  }

  .inset img {
    aspect-ratio: 4 / 5;
  }

  .quote {
    clear: both;
    margin: var(--s-7) 0;
    padding-left: var(--s-5);
    border-left: 2px solid var(--brand-green);
  }

  .quote p {
    font-family: var(--font-display);
    font-weight: var(--display-weight);
    font-size: var(--t-lg);
    line-height: 1.25;
    letter-spacing: -0.012em;
    text-wrap: balance;
  }

  .quote footer {
    margin-top: var(--s-4);
    color: var(--ink-mute);
    font-size: var(--t-xs);
  }

  .full,
  .pair,
  .gallery,
  .funnel {
    clear: both;
    margin: var(--s-6) 0;
  }

  .full img {
    aspect-ratio: 16 / 9;
  }

  .pair {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--s-4);
  }

  .pair img {
    aspect-ratio: 4 / 5;
  }

  .gallery {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: var(--s-4);
  }

  .gallery .g0 {
    grid-row: 1 / 3;
  }

  .gallery .g0 img {
    height: 100%;
  }

  .gallery .g1 img,
  .gallery .g2 img {
    aspect-ratio: 5 / 4;
  }

  /* Selection funnel: each step shorter than the last, navy to green. */
  .funnel {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--s-2);
    align-items: end;
  }

  .funnel li {
    display: grid;
    align-content: end;
    gap: 0.2rem;
    min-height: calc(11rem - var(--k) * 2rem);
    padding: var(--s-4);
    border-radius: 1.25rem;
    color: #fff;
    background: color-mix(in oklab, var(--night) calc(100% - var(--k) * 33%), var(--brand-green));
  }

  .funnel .n {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: var(--t-2xl);
    line-height: 1;
    font-variant-numeric: tabular-nums;
  }

  .funnel .l {
    font-size: var(--t-sm);
    opacity: 0.85;
  }

  @media (max-width: 767px) {
    .inset {
      float: none;
      width: 100%;
      margin: var(--s-5) 0;
    }

    .pair,
    .gallery {
      grid-template-columns: 1fr;
    }

    .gallery .g0 {
      grid-row: auto;
    }

    .gallery .g0 img {
      height: auto;
      aspect-ratio: 4 / 3;
    }

    .funnel {
      grid-template-columns: repeat(2, 1fr);
    }

    .opener-rule::before {
      display: none;
    }
  }
</style>
