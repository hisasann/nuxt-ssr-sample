<template>
  <section class="container">
    <h1>regexp</h1>
    <div>
      <p>path: {{path}}</p>
      <p>params: {{params}}</p>
      <p>query: {{query}}</p>
    </div>
  </section>
</template>

<script>
  // http://localhost:3000/d/eee
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
