<template>
  <nuxt-link to="/" v-scroll-to="'#Home'" class="Logo">V</nuxt-link>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as *;

.Logo {
  font-family: 'Press Start 2P', cursive;
  background: rgba(255, 255, 255, 0);
  color: $color-two;
  padding: 3px 6px 0 6px;
  border-radius: 4px;
  line-height: 1;
  font-size: 48px;

  @media screen and (min-width: 1024px) {
    font-size: 54px;
  }
}
</style>
