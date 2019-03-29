<template>
  <header class="AppHeader" id="Home">
    <section class="Hero">
      <div class="Hero__Content">
        <p class="Hero__Title">{{ msg }}</p>
        <h1 class="Hero__Subtitle">
          My name is Vilius,
          <br>I am Front-End Web Developer
        </h1>
        <MailButton/>
      </div>
    </section>
  </header>
</template>

<script>
import MailButton from '~/components/MailButton.vue'

export default {
  name: 'Navbar',
  data() {
    return {
      msg: '< Hello />',
    }
  },
  components: {
    MailButton,
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/_variables.scss';

$app-header-background-colour: #fff !default;

.AppHeader {
  background-color: $app-header-background-colour;
}

.Hero {
  background-image: url('~assets/images/intro.jpg');
  background-size: auto 340px;
  background-position: right 80%;
  background-repeat: no-repeat;
  height: 500px;
  position: relative;
  max-width: 600px;
  margin: 0 auto;

  @media screen and (min-width: 1088px) {
    height: 700px;
    max-width: 900px;
    background-size: auto 520px;
    background-position: right 50%;
  }
}

.Hero__Content {
  padding: 28px;
  margin: 0 auto;
  text-align: left;
  position: absolute;
  top: 0;
  left: 24px;
  right: 0;

  @media screen and (min-width: 1088px) {
    top: 120px;
    left: 0;
  }
}

.Hero__Title {
  font-size: 26px;
  margin-bottom: 12px;
  font-weight: 500;

  @media screen and (min-width: 1088px) {
    font-size: 32px;
  }
}

.Hero__Subtitle {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 34px;
}
</style>
