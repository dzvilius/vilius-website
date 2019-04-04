<template>
  <div>
    <Header/>
    <About/>
    <Experience/>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import About from '~/components/About.vue'
import Experience from '~/components/Experience.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    About,
    Experience,
    Footer,
  },
}
</script>