<template>
  <header class="AppHeader">
    <section class="Hero">
      <div class="Hero__Content">
        <p class="Hero__Title">Hello :)</p>
        <p class="Hero__Subtitle">
          My name is Vilius,
          <br>I am Front-End Web Developer,
          <br>and I build web applications.
        </p>
        <a href="mailto:hello@viliusdzemyda.com?subject=Say Hi" class="button is-primary">Say Hi</a>
      </div>
    </section>
  </header>
</template>

<style lang="scss" scoped>
@import '~assets/scss/_variables.scss';

$header-background-colour: $color-sky-light !default;
$hero-content-text-color: $color-ink !default;

.AppHeader {
  background-color: $header-background-colour;
  position: relative;
  height: 400px;

  @media screen and (min-width: 1088px) {
    height: 600px;
  }
}

.Hero {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;

  @media screen and (min-width: 1088px) {
    top: 150px;
  }
}

.Hero__Content {
  padding: 24px 0;
  max-width: 600px;
  margin: 0 auto;
  color: $hero-content-text-color;
  text-align: center;
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
