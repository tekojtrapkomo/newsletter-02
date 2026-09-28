<script>
  /** Public awareness grantees, moved into 03 Grants from Communications. */
  import { reveal } from '$lib/reveal.js';
  import { tagOf } from '$lib/data/sections.js';
  import { communications as c } from '$lib/data/issue.js';
  let { lang = 'mn' } = $props();
</script>

<div class="grantee" use:reveal>
  <p class="label">{tagOf('grants', lang, c.grantee.head[lang])}</p>
  <ul>
    {#each c.grantee.items as g}
      <li><span class="num">{g.n}</span><span>{g.t[lang]}</span></li>
    {/each}
  </ul>
  <p class="note">{c.grantee.note[lang]}</p>
</div>

<style>
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--s-5);
    margin-top: var(--s-4);
  }

  li {
    display: grid;
    gap: 0.2rem;
  }

  .num {
    font-size: var(--t-xl);
    color: var(--night);
  }

  .note {
    margin-top: var(--s-3);
    color: var(--ink-mute);
    font-size: var(--t-xs);
  }

  @media (max-width: 767px) {
    ul { grid-template-columns: 1fr; }
  }
</style>
