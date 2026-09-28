<script>
  /** Section opener, from the sections config: eyebrow, then the one H2. */
  import { byId, eyebrow } from '$lib/data/sections.js';
  let { id, lang = 'mn' } = $props();
</script>

<p class="label sec-eyebrow">{eyebrow(id, lang)}</p>
<h2 class="sec-title" id="{id}-title">{byId[id].title[lang]}</h2>
<hr class="rule registered sec-rule" />
