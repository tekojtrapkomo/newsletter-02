<script>
  /** In memoriam, moved out of International into back matter. */
  import { reveal } from '$lib/reveal.js';
  import { tagOf } from '$lib/data/sections.js';
  import { memoriam as m } from '$lib/data/issue.js';
  let { lang = 'mn' } = $props();
</script>

<div class="memoriam" use:reveal>
  <p class="label">{tagOf('memoriam', lang)}</p>
  <h3>{m.name[lang]}</h3>
  <p class="years num">{m.years}</p>
  <p class="body">{m.body[lang]}</p>
</div>

<style>
  .memoriam {
    max-width: 44ch;
    margin: 0 auto;
    text-align: center;
  }

  h3 {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: var(--t-xl);
    margin-top: var(--s-3);
  }

  .years {
    color: var(--ink-mute);
    margin-top: var(--s-1);
  }

  .body {
    margin-top: var(--s-4);
    text-wrap: pretty;
  }
</style>
