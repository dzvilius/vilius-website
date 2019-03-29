<template>
  <nuxt-link to="/" v-scroll-to="'#Home'" class="Logo">V</nuxt-link>
</template>

<style lang="scss" scoped>
@import '~assets/scss/_variables.scss';

.Logo {
  font-family: 'Monoton', sans-serif;
  background: rgba(255, 255, 255, 0.3);
  color: #223344;
  padding: 3px 6px 0 6px;
  border-radius: 4px;
  line-height: 1;
  font-size: 48px;

  @media screen and (min-width: 1088px) {
    font-size: 54px;
  }
}
</style>
