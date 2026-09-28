<script>
  /**
   * 04 Programmes: the four PFP goals in order, each with its own sub-eyebrow
   * and the stories that belong to it, then the MNLF programme, the National
   * Green Lab, as its own sub-block.
   */
  import { reveal } from '$lib/reveal.js';
  import { tagOf } from '$lib/data/sections.js';
  import News from './News.svelte';
  import Feature from './Feature.svelte';
  import { programmes as p, govNews, greenlab } from '$lib/data/issue.js';
  let { lang = 'mn' } = $props();

  const GOAL = {
    en: ['Goal 1 · CBNRM', 'Goal 2 · PA management effectiveness', 'Goal 3 · Policy and PA expansion', 'Goal 4 · Sustainable finance'],
    mn: ['Зорилт 1', 'Зорилт 2', 'Зорилт 3', 'Зорилт 4']
  };
  const SHORT = { en: ['Goal 1', 'Goal 2', 'Goal 3', 'Goal 4'], mn: ['Зорилт 1', 'Зорилт 2', 'Зорилт 3', 'Зорилт 4'] };
  // Stories moved in from Governance, by goal.
  const MOVED = [null, 'A new method for management plans', 'The protected areas law goes to the provinces', 'Performance-based budgets head for a 2027 pilot'];
  const story = (i) => govNews.filter((n) => n.title.en === MOVED[i]);
</script>

{#each p.goals as g, i}
  <div class="goal-block">
    <p class="label sub-eyebrow">{GOAL[lang][i]}</p>
    <div class="goal-row">
      <div class="goal" class:wide={!MOVED[i]} use:reveal>
        {#if g.img}<img src={g.img} alt={g.alt[lang]} loading="lazy" decoding="async" />{/if}
        <div class="goal-txt">
          <p class="label">{tagOf('programmes', lang, SHORT[lang][i])}</p>
          <h3>{g.head[lang]}</h3>
          {#each g.items as it}<p>{it[lang]}</p>{/each}
        </div>
      </div>
      {#if MOVED[i]}
        <News items={story(i)} {lang} section="programmes" sub={SHORT[lang][i]} lead={false} />
      {/if}
    </div>
  </div>
{/each}

<div class="goal-block">
  <p class="label sub-eyebrow">{lang === 'mn' ? 'МБӨС-ийн хөтөлбөр: Үндэсний Ногоон Лаб' : 'MNLF programme: National Green Lab'}</p>
  <Feature feature={greenlab} {lang} tag={tagOf('programmes', lang, lang === 'mn' ? 'Үндэсний Ногоон Лаб' : 'National Green Lab')} />
</div>

<style>
  .goal-block + .goal-block {
    margin-top: var(--s-8);
  }

  .sub-eyebrow {
    margin-bottom: var(--s-4);
    color: #17692a;
  }

  .goal-row {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--s-6);
    align-items: start;
  }

  .goal.wide {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--s-5);
    align-items: center;
  }

  .goal.wide img {
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: 1.25rem;
  }

  .goal-txt .label {
    margin-bottom: var(--s-2);
  }

  .goal img {
    width: calc(100% + 2 * clamp(1.25rem, 2vw, 2rem));
    margin: calc(-1 * clamp(1.25rem, 2vw, 2rem)) calc(-1 * clamp(1.25rem, 2vw, 2rem)) var(--s-4);
    aspect-ratio: 16 / 10;
    object-fit: cover;
    border-radius: 1.5rem 1.5rem 0 0;
  }

  h3 {
    font-family: var(--font-display);
    font-weight: var(--display-weight);
    font-size: var(--t-lg);
    line-height: 1.18;
    margin-bottom: var(--s-4);
    text-wrap: balance;
  }

  .goal p {
    max-width: var(--measure);
  }

  .goal p + p {
    margin-top: var(--s-3);
  }


  @media (max-width: 767px) {
    .goal-row,
    .goal.wide {
      grid-template-columns: 1fr;
    }
  }
</style>
