<template>
  <header class="AppHeader">
    <section class="Hero">
      <div class="Hero__Content">
        <p class="Hero__Title">{{ msg }}</p>
        <p class="Hero__Subtitle">
          My name is Vilius,
          <br>I am Front-End Web Developer,
          <br>and I build web
          applications.
        </p>
        <a href="mailto:hello@viliusdzemyda.com?subject=Say Hi" class="button is-primary">Say Hi</a>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      msg: '< Hello />',
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/_variables.scss';

$app-header-background-colour: $color-sky-light !default;
$hero-content-text-color: $color-ink !default;

.AppHeader {
  background-color: $app-header-background-colour;
}

.Hero {
  background-image: url('~assets/images/intro.jpg');
  background-size: auto 340px;
  background-position: bottom right;
  background-repeat: no-repeat;
  height: 500px;
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  @media screen and (min-width: 1088px) {
    height: 600px;
  }
}

.Hero__Content {
  padding: 24px 0;
  max-width: 600px;
  margin: 0 auto;
  color: $hero-content-text-color;
  text-align: center;

  position: absolute;
  top: 50px;
  left: 0;
  right: 0;

  @media screen and (min-width: 1088px) {
    top: 150px;
  }
}

.Hero__Title {
  font-size: 34px;
  margin-bottom: 24px;
}

.Hero__Subtitle {
  font-size: 20px;
  margin-bottom: 24px;
}
</style>
