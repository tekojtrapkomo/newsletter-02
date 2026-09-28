<script>
  /** "In this issue", rendered from the sections config: numbered sections, then back matter. */
  import { reveal } from '$lib/reveal.js';
  import { sections } from '$lib/data/sections.js';
  import { contentsHeading } from '$lib/data/contents.js';
  let { lang = 'mn' } = $props();
  const main = sections.filter((s) => s.n);
  const back = sections.filter((s) => !s.n);
</script>

<nav class="contents" aria-label={contentsHeading[lang]}>
  <p class="eyebrow">{contentsHeading[lang]}</p>
  <ol class="main">
    {#each main as s, i (s.id)}
      <li use:reveal={i * 60}>
        <a href="#{s.id}"><span class="n num">{s.n}</span><span class="t">{s.title[lang]}</span></a>
      </li>
    {/each}
  </ol>
  <ul class="back">
    {#each back as s (s.id)}
      <li><a href="#{s.id}">{s.title[lang]}</a></li>
    {/each}
  </ul>
</nav>

<style>
  .contents {
    padding: var(--section) var(--page-pad) 0;
  }

  .eyebrow {
    color: var(--ink-mute);
    margin-bottom: var(--s-5);
  }

  ol,
  ul {
    list-style: none;
  }

  .main li + li {
    border-top: 1px solid var(--ink-faint);
  }

  .main a {
    display: grid;
    grid-template-columns: 4rem 1fr;
    align-items: baseline;
    padding: var(--s-3) 0;
    text-decoration: none;
    color: var(--night);
  }

  .n {
    color: var(--brand-green);
    font-size: var(--t-md);
  }

  .t {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: var(--t-lg);
    letter-spacing: -0.015em;
  }

  .main a:hover .t {
    color: #17692a;
  }

  .back {
    display: flex;
    flex-wrap: wrap;
    gap: var(--s-2) var(--s-5);
    margin-top: var(--s-5);
    padding-left: 4rem;
  }

  .back a {
    color: var(--ink-soft);
    font-weight: 500;
  }
</style>
