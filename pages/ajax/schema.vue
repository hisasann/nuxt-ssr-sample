<template>
  <section class="container">
    <div>
      <span><nuxt-link to="/color">color</nuxt-link></span>
      <span>|</span>
      <span>scheme</span>
    </div>

    <div><img :src="data.image.named" /></div>
  </section>
</template>

<script>
  // http://localhost:3000/ajax/schema
  import axios from 'axios'

  export default {
    async asyncData () {
      const hex = Math.floor(Math.random() * 16777215).toString(16)
      const { data } = await axios.get(`http://www.thecolorapi.com/scheme?hex=${hex}`)
      return { data }
    }
  }
</script>
