<script>
  /**
   * News briefs, read in place. Each item is the whole story, not a teaser for
   * a page that does not exist, so nothing here is styled as clickable: no card
   * box, no shadow, no hover lift. Photograph, headline, then the story set as
   * body copy. The first story leads with its photograph beside it.
   */
  import { reveal } from '$lib/reveal.js';
  import { tagOf } from '$lib/data/sections.js';
  let { items, lang = 'mn', section = null, sub = null, lead = true } = $props();
</script>

<div class="news">
  {#each items as n, i}
    <article class="brief" class:lead={lead && i === 0} class:type={!n.img} use:reveal={(i % 2) * 80}>
      {#if n.img}
        <img src={n.img} alt="" loading="lazy" decoding="async" width="960" height="720" />
      {/if}
      <div class="txt">
        <p class="meta"><span class="date">{n.date}</span><span class="tag">{section ? tagOf(section, lang, sub ?? n.tag[lang]) : n.tag[lang]}</span></p>
        <h3>{n.title[lang]}</h3>
        <p class="story">{n.dek[lang]}</p>
      </div>
    </article>
  {/each}
</div>

<style>
  .news {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--s-7) var(--s-6);
  }

  img {
    width: 100%;
    height: auto;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    border-radius: 1rem;
  }

  .txt {
    padding-top: var(--s-4);
  }

  .meta {
    display: flex;
    gap: var(--s-3);
    align-items: baseline;
    font-size: var(--t-xs);
    font-variant-numeric: tabular-nums;
  }

  .date {
    color: #17692a;
    font-weight: 600;
  }

  .tag {
    color: var(--ink-mute);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  h3 {
    margin-top: var(--s-2);
    font-family: var(--font-display);
    font-weight: 600;
    font-size: var(--t-md);
    line-height: 1.2;
    letter-spacing: -0.015em;
    text-wrap: balance;
  }

  /* The story itself: body copy, full contrast, not a grey teaser. */
  .story {
    margin-top: var(--s-2);
    color: var(--ink);
    font-size: var(--t-base);
    line-height: 1.6;
    text-wrap: pretty;
  }

  .lead {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: var(--s-6);
    align-items: center;
  }

  .lead .txt {
    padding-top: 0;
  }

  .lead h3 {
    font-size: var(--t-lg);
  }

  /* No photograph: the story stands as text, set against a green rule. */
  .type .txt {
    padding: 0 0 0 var(--s-4);
    border-left: 2px solid var(--brand-green);
  }

  @media (max-width: 767px) {
    .news,
    .lead {
      grid-template-columns: 1fr;
    }
  }
</style>
