<template>
  <section class="container">
    <h1>search</h1>
    <div>
      <p>path: {{path}}</p>
      <p>params: {{params}}</p>
      <p>query: {{query}}</p>
    </div>
  </section>
</template>

<script>
  // http://localhost:3000/search/foo?a=b
  export default {
    async asyncData({ route }) {
      console.log(route);
      return {
        path: route.path,
        params: route.params,
        query: route.query
      };
    }
  }
</script>
