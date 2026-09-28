<script>
  import { tagOf } from '$lib/data/sections.js';
  import News from './News.svelte';
  import { intlNews } from '$lib/data/issue.js';
  let { lang = 'mn' } = $props();
</script>

  <News items={intlNews} {lang} section="international" />



