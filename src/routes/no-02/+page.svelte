<script>
  import IslandNav from '$lib/components/IslandNav.svelte';
  import Cover from '$lib/components/Cover.svelte';
  import Contents from '$lib/components/Contents.svelte';
  import Section from '$lib/components/Section.svelte';
  import Feature from '$lib/components/Feature.svelte';
  import Governance from '$lib/components/Governance.svelte';
  import Grantees from '$lib/components/Grantees.svelte';
  import Programmes from '$lib/components/Programmes.svelte';
  import International from '$lib/components/International.svelte';
  import Communications from '$lib/components/Communications.svelte';
  import Signed from '$lib/components/Signed.svelte';
  import Voices from '$lib/components/Voices.svelte';
  import Numbers from '$lib/components/Numbers.svelte';
  import AnnualReport from '$lib/components/AnnualReport.svelte';
  import Opportunities from '$lib/components/Opportunities.svelte';
  import Memoriam from '$lib/components/Memoriam.svelte';
  import Closing from '$lib/components/Closing.svelte';
  import { features } from '$lib/data/features.js';
  import { cop17 } from '$lib/data/issue.js';
  import { tagOf } from '$lib/data/sections.js';
  const lang = 'mn';
</script>

<svelte:head>
  <title>Сангаар сонин юу байна? · Дугаар 02 | Монголын Байгалийн Өв Сан</title>
  <link rel="alternate" hreflang="mn" href="https://newsletter.mnlf.org/no-02" />
  <link rel="alternate" hreflang="en" href="https://newsletter.mnlf.org/no-02/en" />
  <link rel="alternate" hreflang="x-default" href="https://newsletter.mnlf.org/no-02/en" />
</svelte:head>

<!-- Structure comes from $lib/data/sections.js; nav and contents read the same list. -->
<IslandNav {lang} />
<Cover {lang} />
<Contents {lang} />

<Section id="cop17" {lang}>
  <Feature feature={cop17} {lang} tag={tagOf('cop17', lang, 'Онцлох сэдэв')} />
</Section>
<Section id="governance" {lang}><Governance {lang} /></Section>
<Section id="grants" {lang}>
  <Feature feature={features.accelerator} {lang} tag={tagOf('grants', lang, 'ТХГН-ийн хурдасгуур')} />
  <Grantees {lang} />
</Section>
<Section id="programmes" {lang}><Programmes {lang} /></Section>
<Section id="international" {lang}><International {lang} /></Section>
<Section id="communications" {lang}><Communications {lang} /></Section>

<Section id="signed" {lang}><Signed {lang} /></Section>
<Section id="voices" {lang}><Voices {lang} /></Section>
<Section id="numbers" {lang}><Numbers {lang} /></Section>
<Section id="annual-report" {lang}><AnnualReport {lang} /></Section>
<Section id="opportunities" {lang}><Opportunities {lang} /></Section>
<Section id="memoriam" {lang}><Memoriam {lang} /></Section>

<Closing {lang} />
