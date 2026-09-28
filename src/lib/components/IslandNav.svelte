<script>
  /**
   * The issue bar: mark and title on the left, sections in the middle with the
   * current one highlighted, MN/EN on the right, and a green reading-progress
   * line along its foot. It floats inside the reading column, never edge to edge.
   */
  import { onMount } from 'svelte';
  import { sections } from '$lib/data/sections.js';
  const main = sections.filter((x) => x.n);
  const back = sections.filter((x) => !x.n);
  let { lang = 'mn' } = $props();
  let open = $state(false);
  let active = $state('');

  const T = {
    mn: { title: 'Сангаар сонин', issue: '02', menu: 'Цэс', more: 'Бусад' },
    en: { title: "What's New", issue: '02', menu: 'Menu', more: 'More' }
  };
  const t = $derived(T[lang]);

  // The highlighted link follows the section in view. IntersectionObserver,
  // not a scroll listener.
  onMount(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (active = e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach(({ id }) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  });
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && (open = false)} />

<nav class="bar" aria-label={t.menu}>
  <a class="brand" href="#top" onclick={(e) => { e.preventDefault(); scrollTo({ top: 0, behavior: 'smooth' }); }}>
    <span class="mark" aria-hidden="true"></span>
    <span class="name">{t.title}</span>
    <span class="no">{t.issue}</span>
  </a>

  <ul class="links">
    {#each main as x (x.id)}
      <li><a href="#{x.id}" class:on={active === x.id} aria-current={active === x.id ? 'true' : undefined}><span class="num">{x.n}</span> {x.label[lang]}</a></li>
    {/each}
    <li class="more">
      <details>
        <summary class:on={back.some((x) => x.id === active)}>{t.more}</summary>
        <ul>
          {#each back as x (x.id)}
            <li><a href="#{x.id}" class:on={active === x.id}>{x.label[lang]}</a></li>
          {/each}
        </ul>
      </details>
    </li>
  </ul>

  <div class="lang" role="group" aria-label="Language">
    <a href="/no-02" class:on={lang === 'mn'} hreflang="mn">MN</a>
    <a href="/no-02/en" class:on={lang === 'en'} hreflang="en">EN</a>
  </div>

  <button class="burger" class:open aria-expanded={open} aria-controls="bar-menu" aria-label={t.menu} onclick={() => (open = !open)}>
    <span></span><span></span>
  </button>

  <span class="progress" aria-hidden="true"></span>
</nav>

<div id="bar-menu" class="overlay" class:open aria-hidden={!open}>
  <ul>
    {#each sections as x, i (x.id)}
      <li style="--i:{i}" class:backm={!x.n}><a href="#{x.id}" tabindex={open ? 0 : -1} onclick={() => (open = false)}>{x.n ? `${x.n} ` : ''}{x.label[lang]}</a></li>
    {/each}
    <li style="--i:{sections.length}" class="ov-lang">
      <a href="/no-02" tabindex={open ? 0 : -1}>MN</a> <a href="/no-02/en" tabindex={open ? 0 : -1}>EN</a>
    </li>
  </ul>
</div>

<style>
  .bar {
    overflow: visible;
    position: fixed;
    top: 1rem;
    left: var(--page-pad);
    right: var(--page-pad);
    z-index: 30;
    display: flex;
    align-items: center;
    gap: var(--s-4);
    height: 3.75rem;
    padding: 0 0.5rem 0 1rem;
    border-radius: 1.25rem;
    background: rgba(253, 253, 251, 0.78);
    backdrop-filter: blur(18px) saturate(150%);
    -webkit-backdrop-filter: blur(18px) saturate(150%);
    box-shadow: 0 1px 2px rgba(14, 45, 91, 0.05), 0 18px 40px -24px rgba(14, 45, 91, 0.3);
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
    color: var(--night);
    flex-shrink: 0;
  }

  .mark {
    width: 1.75rem;
    height: 1.75rem;
    background: var(--brand-green);
    -webkit-mask: url('/mnlf-root.svg') center / contain no-repeat;
    mask: url('/mnlf-root.svg') center / contain no-repeat;
  }

  .name {
    font-family: var(--font-display);
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .no {
    padding: 0.1rem 0.45rem;
    border-radius: 0.5rem;
    background: var(--night);
    color: #fff;
    font-size: var(--t-xs);
    font-weight: 600;
  }

  .links {
    display: flex;
    gap: 0.25rem;
    list-style: none;
    margin: 0 auto;
  }

  .links a {
    display: block;
    padding: 0.45rem 0.8rem;
    border-radius: 0.75rem;
    font-size: var(--t-sm);
    font-weight: 500;
    color: var(--ink-soft);
    text-decoration: none;
    transition: background 400ms var(--ease-mass), color 400ms var(--ease-mass);
  }

  .links .num {
    opacity: 0.6;
    margin-right: 0.15rem;
  }

  .more {
    position: relative;
  }

  summary {
    list-style: none;
    cursor: pointer;
    padding: 0.45rem 0.8rem;
    border-radius: 0.75rem;
    font-size: var(--t-sm);
    font-weight: 500;
    color: var(--ink-soft);
  }

  summary::-webkit-details-marker { display: none; }

  summary.on {
    color: #fff;
    background: var(--night);
  }

  details[open] ul {
    position: absolute;
    top: calc(100% + 0.6rem);
    right: 0;
    min-width: 14rem;
    padding: 0.4rem;
    border-radius: 1rem;
    list-style: none;
    background: var(--surface);
    box-shadow: 0 18px 40px -20px rgba(14, 45, 91, 0.35);
  }

  .links a:hover {
    color: var(--night);
    background: rgba(14, 45, 91, 0.06);
  }

  .links a.on {
    color: #fff;
    background: var(--night);
  }

  .lang {
    display: flex;
    padding: 0.2rem;
    border-radius: 0.8rem;
    background: rgba(14, 45, 91, 0.07);
    flex-shrink: 0;
  }

  .lang a {
    padding: 0.35rem 0.65rem;
    border-radius: 0.6rem;
    font-size: var(--t-xs);
    font-weight: 600;
    color: var(--ink-soft);
    text-decoration: none;
  }

  .lang a.on {
    background: var(--brand-green);
    color: var(--night);
  }

  /* Reading progress: scroll-driven, transform only. */
  .progress {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background: var(--brand-green);
    transform-origin: left;
    transform: scaleX(0);
  }

  @supports (animation-timeline: scroll()) {
    .progress {
      animation: read linear both;
      animation-timeline: scroll(root);
    }
  }

  @keyframes read {
    to { transform: scaleX(1); }
  }

  .burger {
    display: none;
    position: relative;
    width: 2.6rem;
    height: 2.6rem;
    margin-left: auto;
    border: 0;
    border-radius: 0.8rem;
    background: var(--night);
    cursor: pointer;
  }

  .burger span {
    position: absolute;
    left: 50%;
    width: 1rem;
    height: 1.5px;
    background: #fff;
    transition: transform 600ms var(--ease-mass);
  }

  .burger span:first-child { transform: translate(-50%, -3px); }
  .burger span:last-child { transform: translate(-50%, 3px); }
  .burger.open span:first-child { transform: translate(-50%, 0) rotate(45deg); }
  .burger.open span:last-child { transform: translate(-50%, 0) rotate(-45deg); }

  .overlay {
    position: fixed;
    inset: 0;
    z-index: 25;
    display: grid;
    align-items: center;
    padding: 0 1.5rem;
    background: rgba(14, 45, 91, 0.92);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    opacity: 0;
    pointer-events: none;
    transition: opacity 600ms var(--ease-mass);
  }

  .overlay.open {
    opacity: 1;
    pointer-events: auto;
  }

  .overlay ul { list-style: none; }
  .overlay li { overflow: hidden; }

  .overlay a {
    display: inline-block;
    padding: 0.15em 0;
    font-family: var(--font-display);
    font-weight: 700;
    font-size: var(--t-xl);
    color: #fff;
    text-decoration: none;
    transform: translateY(110%);
    transition: transform 800ms var(--ease-mass);
    transition-delay: calc(var(--i) * 60ms);
  }

  .overlay .backm a {
    font-size: var(--t-md);
    opacity: 0.8;
  }

  .overlay .ov-lang a {
    font-size: var(--t-md);
    color: var(--brand-green);
    margin-right: 1rem;
  }

  .overlay.open a { transform: none; }

  @media (max-width: 1100px) {
    .links, .lang { display: none; }
    .burger { display: block; }
  }

  @media (min-width: 1101px) {
    .overlay { display: none; }
  }

  @media (max-width: 767px) {
    .bar { left: 0.75rem; right: 0.75rem; }
  }
</style>
