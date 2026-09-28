<script>
  /** A section frame from the config: id, opener, then whatever the page puts inside. */
  import SectionHead from './SectionHead.svelte';
  let { id, lang = 'mn', children } = $props();
</script>

<section class="section" {id} aria-labelledby="{id}-title">
  <SectionHead {id} {lang} />
  {@render children()}
</section>
