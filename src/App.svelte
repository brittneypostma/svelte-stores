<script>
  import {store} from './stores/store'
</script>

<main>
  {#each $store as data}
  <section>
    {data.title}
  </section>
  {/each}
</main>
