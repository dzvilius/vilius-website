<template>
  <div>
    <Header/>
    <About/>
    <Contact/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import About from '~/components/About.vue'
import Contact from '~/components/Contact.vue'

export default {
  components: {
    Header,
    About,
    Contact,
  },
}
</script>