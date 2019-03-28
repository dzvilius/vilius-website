<template>
  <div>
    <Header/>
    <About/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import About from '~/components/About.vue'

export default {
  components: {
    Header,
    About,
  },
}
</script>