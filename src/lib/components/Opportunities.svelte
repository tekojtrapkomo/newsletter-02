<script>
  /** Calls issued, moved out of Governance into back matter. */
  import { reveal } from '$lib/reveal.js';
  import { tagOf } from '$lib/data/sections.js';
  import { governance as g } from '$lib/data/issue.js';
  let { lang = 'mn' } = $props();
</script>

<div class="calls" use:reveal>
  <p class="label">{tagOf('opportunities', lang, g.calls.title[lang])}</p>
  <ul>{#each g.calls.rows as c}<li>{c[lang]}</li>{/each}</ul>
</div>

<style>
  ul {
    list-style: none;
    columns: 2;
    column-gap: var(--s-6);
    margin-top: var(--s-3);
  }

  li {
    break-inside: avoid;
    padding: 0.35rem 0;
  }

  @media (max-width: 767px) {
    ul { columns: 1; }
  }
</style>
