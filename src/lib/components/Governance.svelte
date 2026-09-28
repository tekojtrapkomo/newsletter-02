<script>
  import { tagOf } from '$lib/data/sections.js';
  /** Засаглал: the period's governance as news, then the consultation table and calls. */
  import News from './News.svelte';
  import { reveal } from '$lib/reveal.js';
  import { governance as g, govNews } from '$lib/data/issue.js';
  // Moved to Programmes: the budget pilot (Goal 4), the planning method (Goal 2)
  // and the law in the provinces (Goal 3).
  const MOVED = ['Performance-based budgets head for a 2027 pilot', 'A new method for management plans', 'The protected areas law goes to the provinces'];
  const items = govNews.filter((n) => !MOVED.includes(n.title.en));
  let { lang = 'mn' } = $props();
</script>

  <News {items} {lang} section="governance" />

  <div class="lower">
    <div>
      <p class="label">{tagOf('governance', lang)}</p>
      <h3 class="sub-title">{g.meetings.title[lang]}</h3>
      <p class="note">{g.meetings.note[lang]}</p>
      <div class="table" role="table" use:reveal>
        {#each g.meetings.rows as [d, what, who]}
          <div class="tr" role="row">
            <span class="d" role="cell">{d}</span>
            <span class="w" role="cell">{what[lang]}<small>{who[lang]}</small></span>
          </div>
        {/each}
      </div>
    </div>
  </div>


<style>
  .lower {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--s-6);
    align-items: start;
  }

  .note {
    color: var(--ink-soft);
    margin-bottom: var(--s-4);
  }

  .tr {
    display: grid;
    grid-template-columns: 7rem 1fr;
    gap: var(--s-3);
    padding: var(--s-3) 0;
  }

  .tr + .tr {
    border-top: 1px solid var(--ink-faint);
  }

  .d {
    color: var(--brand-green);
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }

  small {
    display: block;
    color: var(--ink-mute);
    font-size: var(--t-xs);
    margin-top: 0.2rem;
  }


  @media (max-width: 767px) {
    .lower {
      grid-template-columns: 1fr;
    }
  }
</style>
