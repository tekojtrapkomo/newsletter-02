<script>
  import '../app.css';
  let { children } = $props();
</script>

<div class="roots" aria-hidden="true"></div>
{@render children()}
