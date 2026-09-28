<script>
  import { tagOf } from '$lib/data/sections.js';
  /** 06 Communications: the TV episode, series and campaigns. */
  import { reveal } from '$lib/reveal.js';
  import { communications as c } from '$lib/data/issue.js';
  let { lang = 'mn' } = $props();
</script>


  <div class="tv" use:reveal>
    <p class="label tag">{tagOf('communications', lang, 'TV')}</p>
    <h3>{c.tv.head[lang]}</h3>
    <p>{c.tv.body[lang]}</p>
  </div>

  <div class="series">
    {#each c.series.items as it, i}
      <div use:reveal={(i % 2) * 80}>
        <p class="label">{tagOf('communications', lang, c.series.head[lang])}</p>
        <h3>{it.h[lang]}</h3>
        <p>{it.b[lang]}</p>
      </div>
    {/each}
  </div>

  <p class="label camp-tag">{tagOf('communications', lang)}</p>
  <ul class="campaigns" use:reveal>
    {#each c.campaigns as it}<li>{it[lang]}</li>{/each}
  </ul>


<style>











  .tv {
    margin-top: 0;
    padding: var(--s-5) var(--s-6);
    border-radius: 1.25rem;
    background: var(--night);
    color: #fff;
  }

  .tv h3 {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: var(--t-lg);
    color: var(--brand-green);
  }

  .tv p {
    margin-top: var(--s-2);
  }

  .tv .tag {
    margin: 0 0 var(--s-2);
    color: rgba(255, 255, 255, 0.7);
  }

  .camp-tag {
    margin-top: var(--s-7);
  }

  .camp-tag + .campaigns {
    margin-top: var(--s-3);
  }

  .series {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--s-5) var(--s-7);
    margin-top: var(--s-7);
  }

  .series h3 {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: var(--t-md);
    margin-bottom: var(--s-2);
  }

  .campaigns {
    list-style: none;
    margin-top: var(--s-7);
    padding-left: var(--s-4);
    border-left: 2px solid var(--brand-green);
  }

  .campaigns li + li {
    margin-top: var(--s-2);
  }

  @media (max-width: 767px) {
    .series {
      grid-template-columns: 1fr;
    }
  }
</style>
