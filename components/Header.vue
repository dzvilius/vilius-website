<template>
  <header class="AppHeader" id="Home">
    <section class="Hero">
      <div class="Hero__Content">
        <p class="Hero__Title">{{ msg }}</p>
        <h1 class="Hero__Subtitle">
          My name is Vilius,<br />
          I am UI/UX Front End Developer based in Ireland.
        </h1>
        <ButtonMail />
      </div>
    </section>
  </header>
</template>

<script>
import ButtonMail from '~/components/Buttons/ButtonMail.vue'

export default {
  name: 'Navbar',
  data() {
    return {
      msg: 'Hello,',
    }
  },
  components: {
    ButtonMail,
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/_variables.scss';

$app-header-background-colour: #000 !default;

.AppHeader {
  background-color: $app-header-background-colour;
}

.Hero {
  background-size: auto 380px;
  background-position: right 70%;
  background-repeat: no-repeat;
  height: 600px;
  position: relative;
  max-width: 600px;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    height: 700px;
    max-width: 1380px;
    background-size: auto 680px;
    background-position: right -20px;
  }
}

.Hero__Content {
  padding: 28px;
  margin: 0 auto;
  text-align: left;
  position: absolute;
  top: -10px;
  left: 30px;
  right: 0;

  @media screen and (min-width: 1024px) {
    top: 120px;
    left: 100px;
  }
}

.Hero__Title {
  font-size: 28px;
  margin-bottom: 12px;
  font-weight: 500;

  @media screen and (min-width: 1024px) {
    font-size: 32px;
  }
}

.Hero__Subtitle {
  font-size: 20px;
  line-height: 2.4;
  margin-bottom: 34px;
}
</style>
