<template>
  <div>
    <Header/>
    <About/>
    <Hiring/>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import About from '~/components/About.vue'
import Hiring from '~/components/Hiring.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    About,
    Hiring,
    Footer,
  },
}
</script>