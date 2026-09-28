<script>
  import { tagOf } from '$lib/data/sections.js';
  /** Тоогоор: a typographic ledger, not stat cards. Every figure is mono. */
  import { reveal } from '$lib/reveal.js';
  import { numbers } from '$lib/data/issue.js';
  let { lang = 'mn' } = $props();
</script>

  <div class="groups">
    {#each numbers.groups as g, i}
      <div class="group" use:reveal={i * 80}>
        <p class="label">{tagOf('numbers', lang, g.head[lang])}</p>
        <dl>
          {#each g.rows as [fig, label]}
            <div class="row">
              <dt class="fig">{fig}</dt>
              <dd>{label[lang]}</dd>
            </div>
          {/each}
        </dl>
      </div>
    {/each}
  </div>


<style>
  .groups {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--s-7) var(--s-6);
  }

  .label {
    font-weight: var(--display-weight);
    margin-bottom: var(--s-3);
  }

  /* Figure above its label: a wide mono figure never collides with the text. */
  .row {
    display: grid;
    gap: 0.15rem;
    padding: var(--s-2) 0;
    border-top: var(--rule) solid var(--ink-faint);
  }

  .fig {
    font-family: var(--font-display);
    font-weight: 600;
    color: var(--ink);
    font-size: var(--t-xl);
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.02em;
    white-space: nowrap;
  }

  dd {
    color: var(--ink-soft);
    font-size: var(--t-sm);
    line-height: 1.45;
  }

  @media (max-width: 767px) {
    .groups {
      grid-template-columns: 1fr;
      gap: var(--s-6);
    }
  }
</style>
