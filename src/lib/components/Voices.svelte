<script>
  import { tagOf } from '$lib/data/sections.js';
  /** Verbatim excerpts only. Attribution is name and role, no dashes. */
  import { reveal } from '$lib/reveal.js';
  import { voices } from '$lib/data/issue.js';
  let { lang = 'mn' } = $props();
</script>

  <div class="wall">
    {#each voices.items as q, i}
      <blockquote use:reveal={(i % 2) * 90}>
        <p class="label tag">{tagOf('voices', lang)}</p>
        <p>“{q[lang]}”</p>
        <footer class="mono">{q.by[lang]}</footer>
      </blockquote>
    {/each}
  </div>


<style>
  .wall {
    columns: 2;
    column-gap: var(--s-7);
  }

  blockquote {
    break-inside: avoid;
    margin-bottom: var(--s-6);
    padding-left: var(--s-4);
    border-left: var(--rule) solid var(--horizon);
  }

  .tag {
    margin-bottom: var(--s-2);
  }

  p:not(.tag) {
    font-family: var(--font-display);
    font-size: var(--t-md);
    line-height: 1.3;
    text-wrap: pretty;
  }

  footer {
    margin-top: var(--s-3);
    color: var(--ink-mute);
    font-size: var(--t-xs);
  }

  @media (max-width: 767px) {
    .wall {
      columns: 1;
    }
  }
</style>
