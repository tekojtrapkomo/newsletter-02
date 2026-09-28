<script>
  /**
   * The Record — a typographic index, given the same care as the feature.
   *
   * One module, repeated exactly: mono date rail in column 1, category label,
   * title and 45–60 words in the reading column 2–8, one small image at the
   * same size in the marginalia column 9–12.
   *
   * The uniformity is deliberate and is the brief's instruction — no entry gets
   * more room for feeling more important. A record where one item swells has
   * started editorialising, and the even rhythm is what makes the section read
   * as an institution with a great deal underway rather than as leftovers.
   */
  import { record, recordHeading } from '$lib/data/record.js';
  import { reveal } from '$lib/reveal.js';

  let { lang = 'mn', openerImage = null } = $props();

  const h = $derived(recordHeading[lang]);

  const split = (d) => {
    const [year, ...rest] = d.split('.');
    return { year, md: rest.join('.') };
  };
</script>

<section class="record" id="record" aria-labelledby="record-heading">
  <!--
    Section opener. With a photograph it is full-bleed, darkened by a scrim so
    the type clears contrast; without one it falls back to a shallow gradient
    band — a section marker, not a second cover. openerImage is null until a
    usable photograph exists: everything in the Facebook export is either a
    carousel graphic or event photography with burned-in logo bars.
  -->
  <header class="opener" class:has-image={openerImage}>
    {#if openerImage}
      <img class="opener-photo" src={openerImage} alt="" />
    {/if}
    <div class="opener-text" use:reveal>
      <p class="eyebrow">{h.kicker}</p>
      <h2 id="record-heading" class="lede">{h.lede}</h2>
    </div>
  </header>
  <hr class="rule registered opener-rule" />

  <ol class="entries">
    {#each record as entry (entry.id)}
      <li class="entry" class:pending={entry.needsSource}>
        <div class="row" use:reveal>
          <p class="date mono">
            {#if entry.date}
              <span class="year">{split(entry.date).year}</span>
              <span class="md">{split(entry.date).md}</span>
            {:else}
              <span class="year undated">&mdash;</span>
            {/if}
          </p>

          <div class="text">
            <p class="label">{entry.label[lang]}</p>
            <h3 class="title">{entry.title[lang]}</h3>
            {#if entry.needsSource}
              <p class="todo mono">{entry.todo[lang]}</p>
            {:else}
              <p class="body">{entry.body[lang]}</p>
            {/if}
          </div>

          <figure class="shot">
            {#if entry.image}
              <img src={entry.image} alt={entry.alt[lang]} loading="lazy" decoding="async" />
            {:else}
              <figcaption class="note mono">
                {lang === 'mn' ? 'Гэрэл зураг дутуу' : 'Photography missing'}
              </figcaption>
            {/if}
          </figure>
        </div>
        <hr class="sep registered" />
      </li>
    {/each}
  </ol>
</section>

<style>
  .record {
    padding-bottom: var(--section);
  }

  /* ── Section opener ─────────────────────────────────────────────────────── */
  /* Light opener: the page has one theme. Only the cover is dark. The scale of
     the title, not a colour band, marks the section. */
  .opener {
    padding: var(--section) var(--page-pad) var(--s-5);
    color: var(--ink);
  }

  .opener.has-image {
    color: var(--on-night);
    background: var(--night);
    min-height: 56svh;
  }

  /* Photography full-bleed, never framed, rounded or shadowed. The scrim is a
     legibility device, not a style: type over an untreated photograph cannot be
     guaranteed to clear 4.5:1. */
  .opener-photo {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.46) saturate(0.86);
  }

  .opener-text {
    position: relative;
  }


  .lede {
    margin-top: var(--s-3);
    font-family: var(--font-display);
    font-weight: var(--display-weight);
    font-size: var(--t-2xl);
    line-height: 1.15;
    max-width: 18ch;
  }

  .opener-rule,
  .sep {
    --grid-gap: var(--s-4);
    margin-inline: var(--page-pad);
  }

  .entries {
    list-style: none;
  }

  .row {
    display: grid;
    /* minmax(0, 1fr), not 1fr. Bare `1fr` is `minmax(auto, 1fr)`, so a column
       whose content cannot shrink — the mono date, which never wraps — takes
       more than its twelfth and pushes every column after it out of register. */
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: var(--grid-gap);
    align-items: start;
    padding: var(--s-6) var(--page-pad);
  }

  .date {
    grid-column: 1 / 2;
    display: flex;
    flex-direction: column;
    color: var(--ink-mute);
    padding-top: 0.2em;
  }

  .date .year {
    color: var(--ink-soft);
  }

  .title {
    margin-top: var(--s-2);
    font-family: var(--font-display);
    font-weight: var(--display-weight);
    font-size: var(--t-lg);
    line-height: 1.14;
    letter-spacing: -0.014em;
    text-wrap: balance;
  }

  .body {
    margin-top: var(--s-3);
    max-width: var(--measure);
    color: var(--ink);
    text-wrap: pretty;
  }

  .note {
    margin-top: var(--s-3);
    color: var(--ink-mute);
  }

  /* Visible on purpose: an unwritten entry should look unwritten. The dashed
     rule carries the provisional signal — NOT --ember, which exists only inside
     the gradient and fails contrast as text besides. */
  .todo {
    margin-top: var(--s-3);
    color: var(--ink-mute);
    border-left: var(--rule) dashed var(--ink-soft);
    padding-left: var(--s-3);
  }

  .undated {
    color: var(--ink-faint);
  }

  .pending .title {
    color: var(--ink-soft);
  }

  /* ── Standard: reading column 2–8, image in the marginalia column ───────── */
  .text {
    grid-column: 2 / 9;
  }

  .shot {
    grid-column: 9 / 13;
  }

  /* Identical image treatment throughout — same dimensions, same position. */
  .shot img {
    width: 100%;
    height: auto;
    aspect-ratio: 3 / 2;
    object-fit: cover;
  }

  @media (max-width: 767px) {
    .row {
      grid-template-columns: 1fr;
      gap: var(--s-2);
      padding-block: var(--s-5);
    }

    .date,
    .text,
    .shot {
      grid-column: 1 / -1;
    }

    .date {
      flex-direction: row;
      gap: 0.4em;
      padding-top: 0;
    }

    .shot {
      margin-top: var(--s-3);
    }

    .shot img {
      aspect-ratio: 3 / 2;
    }

    .opener-rule::before,
    .sep::before {
      display: none;
    }
  }
</style>
