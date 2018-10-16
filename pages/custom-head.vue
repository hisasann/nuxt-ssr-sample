<template>
  <section class="container">
    <h1>custom-head</h1>
    <div>
      <p>path: {{path}}</p>
      <p>params: {{params}}</p>
      <p>query: {{query}}</p>
    </div>
  </section>
</template>

<script>
  // http://localhost:3000/custom-head
  export default {
    async asyncData({ route }) {
      console.log(route);
      return {
        path: route.path,
        params: route.params,
        query: route.query
      };
    },

    data () {
      return {
        title: 'Hello World!'
      }
    },

    head() {
      return {
        title: this.title,
        meta: [
          { hid: 'description', name: 'description', content: 'My custom description' }
        ]
      }
    }
  }
</script>
