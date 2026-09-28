<script>
  /**
   * A section that is in the running order but not yet written. It exists so
   * the issue lands in the right shape — the record is where the issue ends,
   * not where it opens — and so an unwritten section is unmistakably unwritten.
   */
  let { kicker, title, meta, todo, id } = $props();
</script>

<section class="stub" {id} aria-labelledby="{id}-heading">
  <header class="opener">
    <h2 id="{id}-heading" class="lede">{title}</h2>
  </header>
  <hr class="rule registered opener-rule" />

  <div class="row">
    <p class="date mono">{meta}</p>
    <p class="todo mono">{todo}</p>
  </div>
</section>

<style>
  .stub {
  }

  /* Light opener: the page has one theme. Only the cover is dark. The scale of
     the title, not a colour band, marks the section. */
  .opener {
    padding: var(--section) var(--page-pad) var(--s-5);
    color: var(--ink);
  }


  .lede {
    margin-top: var(--s-3);
    font-family: var(--font-display);
    font-weight: var(--display-weight);
    font-size: var(--t-2xl);
    line-height: 1.15;
    max-width: 18ch;
  }

  .opener-rule {
    --grid-gap: var(--s-4);
    margin-inline: var(--page-pad);
  }

  .row {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: var(--s-4);
    padding: var(--s-5) var(--page-pad) var(--s-6);
  }

  .date {
    grid-column: 1 / 2;
    color: var(--ink-mute);
  }

  .todo {
    grid-column: 2 / 9;
    color: var(--ink-mute);
    border-left: var(--rule) dashed var(--ink-soft);
    padding-left: var(--s-3);
  }

  @media (max-width: 767px) {
    .row {
      grid-template-columns: 1fr;
      gap: var(--s-2);
    }

    .date,
    .todo {
      grid-column: 1 / -1;
    }

    .opener-rule::before {
      display: none;
    }
  }
</style>
