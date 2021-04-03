<script>
  import {persistData} from './stores/store'

  console.log($persistData)
</script>

<main>
  {#each $persistData as data}
  <section>
    {data.title}
  </section>
  {/each}
</main>
