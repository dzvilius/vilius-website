<template>
  <nuxt-link to="/" class="logo">
    <div class="logo__text">VD</div>
  </nuxt-link>
</template>

<style lang="scss" scoped>
@import '~assets/scss/_variables.scss';

$logo-text-color: $color-ink !default;

.logo {
  color: $logo-text-color;
  line-height: 1;
  padding: 1.4rem;
  position: relative;
  align-items: center;
}

.logo__text {
  font-size: 22px;
  font-weight: 900;
  margin: 0;
  padding: 0;
}
</style>
