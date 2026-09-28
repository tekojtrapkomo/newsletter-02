<script>
  /**
   * The masthead is still a question, and still the identity. Now set in a bold
   * grotesk, left-aligned in the reading column, over a framed photograph.
   */
  let { lang = 'mn' } = $props();

  const COPY = {
    mn: { masthead: 'Сангаар сонин юу байна?', counterpart: "What's New at MNLF", issue: 'Дугаар 02', period: '2026 оны 4-8 сар',
          alt: 'COP17-ын Ногоон бүс дэх “Байгаль” павильон' },
    en: { masthead: "What's New at MNLF", counterpart: 'Сангаар сонин юу байна?', issue: 'No. 02', period: 'April-August 2026',
          alt: 'The Nature Pavilion in the COP17 Green Zone' }
  };
  const t = $derived(COPY[lang]);
</script>

<header class="cover" aria-label={t.masthead}>
  <div class="words">
    <p class="eyebrow issue">{t.issue} <span aria-hidden="true">·</span> {t.period}</p>
    <h1 class="question">{t.masthead}</h1>
    <p class="counterpart">{t.counterpart}</p>
  </div>

  <figure class="hero">
    <img src="/features/cop-pavilion.jpg" alt={t.alt} width="720" height="554" fetchpriority="high" />
  </figure>
</header>

<style>
  /* Editorial split: the question on the left, one photograph on the right.
     The photograph is half the column, not the whole screen. */
  /* The question, then one photograph the full width of the column: the same
     width as the nav bar above it. */
  .cover {
    padding: 9rem var(--page-pad) 0;
  }

  .issue {
    color: var(--ink-soft);
    animation: rise 900ms var(--ease-mass) 100ms both;
  }

  .question {
    margin-top: var(--s-5);
    font-family: var(--font-display);
    font-weight: 700;
    font-size: clamp(3rem, 1.4rem + 5vw, 7.5rem);
    color: var(--night);
    color: var(--ink);
    max-width: 16ch;
    text-wrap: balance;
    animation: rise 1100ms var(--ease-mass) 200ms both;
  }

  .counterpart {
    margin-top: var(--s-4);
    color: var(--brand-green);
    font-weight: 600;
    letter-spacing: 0.02em;
    animation: rise 1100ms var(--ease-mass) 320ms both;
  }

  .hero {
    margin: var(--s-6) 0 0;
    animation: rise 1300ms var(--ease-mass) 420ms both;
  }

  .hero img {
    width: 100%;
    height: auto;
    aspect-ratio: 21 / 9;
    object-fit: cover;
    object-position: center 42%;
  }

  @keyframes rise {
    from { opacity: 0; transform: translateY(2rem); filter: blur(8px); }
    to { opacity: 1; transform: none; filter: none; }
  }

  @media (max-width: 767px) {
    .cover {
      padding-top: 6.5rem;
    }

    .hero img {
      aspect-ratio: 4 / 3;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .issue, .question, .counterpart, .hero { animation: none; }
  }
</style>
