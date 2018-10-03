<template>
  <section class="container">
    <div>
      <span>color</span>
      <span>|</span>
      <span><nuxt-link to="/schema">scheme</nuxt-link></span>
    </div>

    <div><img :src="data.image.named" /></div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData () {
    const hex = Math.floor(Math.random() * 16777215).toString(16)
    const { data } = await axios.get(`http://www.thecolorapi.com/id?hex=${hex}`)
    return { data }
  }
}
</script>
