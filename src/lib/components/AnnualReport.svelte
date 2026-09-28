<script>
  import { tagOf } from '$lib/data/sections.js';
  /** The report is out: what is in it, four figures, and the one place to read it. */
  import { reveal } from '$lib/reveal.js';
  import { annualReport as r } from '$lib/data/issue.js';
  let { lang = 'mn' } = $props();
</script>

  <div class="wrap" use:reveal>
    <a class="cover" href={r.url} aria-label={r.read[lang]}>
      <img src="/features/ar-cover.jpg" alt="" loading="lazy" decoding="async" />
    </a>
    <div class="txt">
      <p class="lead">{r.lead[lang]}</p>
      <p class="body">{r.body[lang]}</p>
      <dl class="stats">
        {#each r.stats as [n, l]}
          <div><dt class="num">{n}</dt><dd>{l[lang]}</dd></div>
        {/each}
      </dl>
      <div class="actions">
        <a class="btn" href={r.url}>{r.read[lang]} <span aria-hidden="true">↗</span></a>
        <a class="pdf" href={r.pdfUrl}>{r.pdf[lang]}</a>
      </div>
      <p class="note">{r.mnNote[lang]}</p>
    </div>
  </div>


<style>
  .wrap {
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: var(--s-7);
    align-items: center;
  }

  .cover img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 30px 60px -30px rgba(14, 45, 91, 0.45);
    transition: transform 700ms var(--ease-mass);
  }

  .cover:hover img {
    transform: translateY(-6px);
  }

  .lead {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: var(--t-lg);
    line-height: 1.2;
  }

  .body {
    margin-top: var(--s-3);
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--s-4) var(--s-5);
    margin: var(--s-5) 0;
  }

  .num {
    font-size: var(--t-xl);
    line-height: 1;
    color: var(--night);
  }

  dd {
    margin-top: 0.3rem;
    color: var(--ink-soft);
    font-size: var(--t-sm);
  }

  .actions {
    display: flex;
    gap: var(--s-4);
    align-items: center;
    flex-wrap: wrap;
  }

  .btn {
    display: inline-flex;
    gap: 0.6rem;
    align-items: center;
    padding: 0.8rem 1.4rem;
    border-radius: 999px;
    background: var(--brand-green);
    color: var(--night);
    font-weight: 600;
    text-decoration: none;
    transition: transform 400ms var(--ease-mass);
  }

  .btn:active {
    transform: scale(0.98);
  }

  .pdf {
    color: var(--night);
    font-weight: 500;
  }

  .note {
    margin-top: var(--s-3);
    color: var(--ink-mute);
    font-size: var(--t-xs);
  }

  @media (max-width: 767px) {
    .wrap {
      grid-template-columns: 1fr;
    }
  }
</style>
