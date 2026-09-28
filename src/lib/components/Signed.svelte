<script>
  import { tagOf } from '$lib/data/sections.js';
  /** Every agreement signed in the period, in one place. */
  import { reveal } from '$lib/reveal.js';
  import { signed } from '$lib/data/issue.js';
  let { lang = 'mn' } = $props();
</script>

  <ol class="list">
    {#each signed.items as it, i}
      <li use:reveal={(i % 2) * 80}>
        <span class="date">{it.date}</span>
        <p class="label tag">{tagOf('signed', lang)}</p>
        <h3>{it.title[lang]}</h3>
        <p>{it.body[lang]}</p>
      </li>
    {/each}
  </ol>


<style>
  .list {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--s-6) var(--s-6);
  }

  li {
    display: grid;
    grid-template-columns: 5ch 1fr;
    column-gap: var(--s-4);
  }

  .date {
    grid-row: 1 / 4;
    color: var(--ink-mute);
    padding-top: 0.35em;
  }

  .tag {
    grid-column: 2;
    margin-bottom: 0.3rem;
  }

  h3 {
    grid-column: 2;
    font-family: var(--font-display);
    font-weight: var(--display-weight);
    font-size: var(--t-md);
    line-height: 1.2;
  }

  p:not(.tag) {
    grid-column: 2;
    margin-top: var(--s-2);
    color: var(--ink-soft);
    font-size: var(--t-sm);
    line-height: 1.55;
  }

  @media (max-width: 767px) {
    .list {
      grid-template-columns: 1fr;
    }
  }
</style>
