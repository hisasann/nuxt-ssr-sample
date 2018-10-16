<template>
  <section class="container">
    <h1>parent-child</h1>
    <div>
      <p>path: {{path}}</p>
      <p>params: {{params}}</p>
      <p>query: {{query}}</p>
    </div>
  </section>
</template>

<script>
  export default {
    async asyncData({ route }) {
      // http://localhost:3000/search/foo?a=b
      console.log(route);
      return {
        path: route.path,
        params: route.params,
        query: route.query
      };
    }
  }
</script>
