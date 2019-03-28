<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenu"
          v-on:click="showMenu = !showMenu"
          v-bind:class="{ 'is-active' : showMenu }"
        >
          <IconMenu class="icon-menu"/>
        </a>
      </div>
      <div id="navbarMenu" class="navbar-menu" v-bind:class="{ 'is-active' : showMenu }">
        <div class="navbar-end">
          <nuxt-link to="/#About#" v-scroll-to="'#About'" class="navbar-item">About</nuxt-link>
          <nuxt-link to="/#Contact" v-scroll-to="'#Contact'" class="navbar-item">Contact</nuxt-link>
          <a href="./files/Vilius_Dzemyda_CV.pdf" class="navbar-item" target="_blank">CV</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// import Logo from '~/components/Logo.vue'
import IconMenu from '~/components/Icons/IconMenu.vue'

export default {
  name: 'Navbar',
  data() {
    return {
      showMenu: false,
    }
  },
  components: {
    IconMenu,
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/_variables.scss';

$navbar-menu-background: $color-sky-lighter !default;
$icon-menu-color: $color-ink !default;

.navbar-item {
  font-size: 14px;
  padding: 0.5rem 1.5rem;
  text-transform: uppercase;
  font-weight: 600;

  @media screen and (min-width: 1088px) {
    padding: 0.5rem 1rem;
    font-size: 16px;
  }
}

.navbar-menu {
  @media screen and (max-width: 1087px) {
    background: $navbar-menu-background;
  }
}

.icon-menu {
  position: absolute;
  top: calc(50% - 19px);
  left: calc(50% - 19px);
  width: 38px;
  height: 38px;
  stroke-width: 3;
  color: $icon-menu-color;
}
</style>