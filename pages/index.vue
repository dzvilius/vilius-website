<template>
  <div>
    <Header/>
    <About/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import About from '~/components/About.vue'
import Contact from '~/components/Contact.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    About,
    Contact,
    Footer,
  },
}
</script>