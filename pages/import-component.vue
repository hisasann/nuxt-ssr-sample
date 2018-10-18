<template>
  <section class="container">
    <h1>import component</h1>
    <div>
      <simple-component/>
    </div>
  </section>
</template>

<script>
  import SimpleComponent from '~/components/SimpleComponent.vue'

  export default {
    components: {
      SimpleComponent
    }
  }
</script>
