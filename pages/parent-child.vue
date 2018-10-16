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
      // http://localhost:3000/c-01/e-02/
      console.log(route);
      return {
        path: route.path,
        params: route.params,
        query: route.query
      };
    }
  }
</script>
