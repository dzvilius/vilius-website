<template>
  <header class="header">
    <section class="hero">
      <div class="hero__content">
        <p class="hero-title">Hello :)</p>
        <p class="hero-subtitle">
          My name is Vilius,
          <br>I am Front-End Web Developer,
          <br>and I build web applications.
        </p>
        <a href="#" class="button is-primary">Say Hi</a>
      </div>
    </section>
  </header>
</template>

<style lang="scss" scoped>
@import '~assets/scss/_variables.scss';

$header-background-colour: $color-sky-light !default;
$header-content-text-color: $color-ink !default;

.header {
  background-color: $header-background-colour;
  position: relative;
  height: 400px;

  @media screen and (min-width: 1088px) {
    height: 600px;
  }
}

.hero {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;

  @media screen and (min-width: 1088px) {
    top: 150px;
  }
}

.hero__content {
  padding: 24px 0;
  max-width: 600px;
  margin: 0 auto;
  color: $header-content-text-color;
  text-align: center;
}

.hero-title {
  font-size: 34px;
  margin-bottom: 24px;
}

.hero-subtitle {
  font-size: 20px;
  margin-bottom: 24px;
}
</style>
