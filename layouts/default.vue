<template>
  <div class="app">
    <Navbar/>
    <nuxt class="main"/>
  </div>
</template>

<script>
import Navbar from '~/components/Bulma/Navbar.vue'

export default {
  components: {
    Navbar,
  },
}
</script>

<style src="~/assets/scss/style.scss" lang="scss">
</style>
