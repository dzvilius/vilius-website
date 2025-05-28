<template>
  <div class="App">
    <Navbar class="AppNavbar"/>
    <NuxtPage class="AppContainer"/>
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

<style src="@/assets/scss/style.scss" lang="scss">
</style>
