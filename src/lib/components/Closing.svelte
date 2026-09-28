<script>
  /**
   * Дараагийн дугаарт — the closing note and colophon.
   *
   * No thank-you paragraph, no mission statement restated. The issue ends.
   * Per house rule the closing does not name the foundation.
   */
  import { reveal } from '$lib/reveal.js';
  import { ahead } from '$lib/data/issue.js';
  let { lang = 'mn' } = $props();

  const COPY = {
    mn: {
      kicker: 'Дараагийн дугаарт',
      lines: [
        '“ТХГН-ийн хурдасгуур” хөтөлбөрийн бэлэн байдлын үе шат аравдугаар сарын 1-нд өндөрлөнө.',
        'Менежмент сайжруулах үе шат аравдугаар сараас нээгдэнэ.',
        'Хамгаалалтын захиргаад эхний грантаараа юу хийснийг дараагийн дугаарт тоймлоно.'
      ],
      colophon: [
        ['Дугаар', '02'],
        ['Хугацаа', '2026 оны 4-8 сар'],
        ['Холбоо барих', 'info@mnlf.org'],
        ['Захиалга', 'newsletter.mnlf.org']
      ]
    },
    en: {
      kicker: 'In the next issue',
      lines: [
        'The Readiness phase of the PA Accelerator closes on 1 October.',
        'The Management Improvement phase opens from October.',
        'The next issue accounts for what administrations did with their first grants.'
      ],
      colophon: [
        ['Issue', 'No. 02'],
        ['Period', 'April-August 2026'],
        ['Contact', 'info@mnlf.org'],
        ['Subscribe', 'newsletter.mnlf.org']
      ]
    }
  };

  const t = $derived(COPY[lang]);
  const cta = $derived(lang === 'mn' ? 'Дараагийн дугаарыг хүлээн авах' : 'Receive the next issue');
</script>

<footer class="closing">
  <hr class="rule registered" />
  <div class="row" use:reveal>
    <p class="kicker label">{ahead.kicker[lang]}</p>
    <div class="lines">
      <!-- Double-bezel CTA: the issue's only button. -->
      <div class="bezel">
        <a class="cta" href="mailto:info@mnlf.org?subject=Newsletter">
          <span>{cta}</span>
          <span class="cta-icon" aria-hidden="true">↗</span>
        </a>
      </div>
      {#each ahead.lines[lang] as line}
        <p class="line">{line}</p>
      {/each}
    </div>
    <dl class="colophon mono">
      {#each t.colophon as [term, value]}
        <div class="pair">
          <dt>{term}</dt>
          <dd>{value}</dd>
        </div>
      {/each}
    </dl>
  </div>
</footer>

<style>
  .closing {
    padding-bottom: var(--section);
  }

  .bezel {
    display: inline-block;
    margin-bottom: var(--s-6);
    padding: 0.35rem;
    border-radius: 999px;
    background: rgba(22, 26, 32, 0.04);
    box-shadow: 0 0 0 1px rgba(22, 26, 32, 0.06);
  }

  .cta {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 0.5rem 0.5rem 1.5rem;
    border-radius: 999px;
    background: var(--night);
    color: var(--limestone);
    text-decoration: none;
    font-size: var(--t-sm);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);
    transition: transform 500ms var(--ease-mass);
  }

  .cta:active {
    transform: scale(0.98);
  }

  .cta-icon {
    display: grid;
    place-items: center;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    background: rgba(237, 231, 218, 0.12);
    transition: transform 500ms var(--ease-mass);
  }

  .cta:hover .cta-icon {
    transform: translate(2px, -2px) scale(1.06);
  }

  .rule {
    --grid-gap: var(--s-4);
    margin-inline: var(--page-pad);
  }

  .row {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: var(--s-4);
    padding: var(--s-6) var(--page-pad) 0;
    align-items: start;
  }

  .kicker {
    grid-column: 1 / 2;
  }

  .lines {
    grid-column: 2 / 9;
    max-width: var(--measure);
  }

  .line {
    font-family: var(--font-display);
    font-size: var(--t-md);
    line-height: 1.3;
    text-wrap: pretty;
  }

  .line + .line {
    margin-top: var(--s-3);
  }

  .colophon {
    grid-column: 9 / 13;
    color: var(--ink-mute);
  }

  .pair {
    display: flex;
    gap: var(--s-2);
    justify-content: space-between;
    padding: var(--s-1) 0;
    border-bottom: var(--rule) solid var(--ink-faint);
  }

  dd {
    text-align: right;
  }

  @media (max-width: 767px) {
    .row {
      grid-template-columns: 1fr;
      gap: var(--s-4);
    }

    .kicker,
    .lines,
    .colophon {
      grid-column: 1 / -1;
    }

    .rule::before {
      display: none;
    }
  }
</style>
