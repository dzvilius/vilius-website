<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <Logo class="NavbarLogo" />
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenu"
          v-on:click="showMenu = !showMenu"
          v-bind:class="{ 'is-active': showMenu }"
        >
          <IconMenu class="MenuIcon" />
        </a>
      </div>
      <div
        id="navbarMenu"
        class="navbar-menu"
        v-bind:class="{ 'is-active': showMenu }"
      >
        <div class="navbar-end">
          <a
            href="https://linkedin.com/in/viliusdzemyda"
            target="_blank"
            rel="noopener"
            class="navbar-item"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/dzvilius"
            target="_blank"
            rel="noopener"
            class="navbar-item"
          >
            GitHub
          </a>
          <a
            href="mailto:dev@viliusdzemyda.com?subject=Contact"
            class="navbar-item"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from '~/components/Logo.vue'
import IconMenu from '~/components/Icons/IconMenu.vue'

export default {
  name: 'Navbar',
  data() {
    return {
      showMenu: false,
    }
  },
  components: {
    Logo,
    IconMenu,
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as *;

$navbar-menu-background-color: #aaa !default;
$icon-menu-color: $color-two !default;

.navbar {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: none;
}


.navbar-item {
  font-size: 10px;
  padding: 6px 24px;
  text-transform: uppercase;
  font-weight: 700;
  color: $color-two;
  font-family: 'Press Start 2P', cursive;
  background: none;

  @media screen and (min-width: 1024px) {
    padding: 0.5rem 1rem;
    font-size: 13px;
  }
}

.NavbarLogo {
  position: absolute;
  top: 14px;
  left: 21px;
}

.navbar-burger {
  margin-inline-end: 0.5rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.navbar-burger:hover {
  background-color: transparent;
}

.navbar-menu {
  @media screen and (max-width: 1023px) {
    right: 50px;
    top: 38px;
    position: absolute;
    width: 140px;
    background-color: $navbar-menu-background-color;
    border-radius: 8px;
    padding: 12px 0;
    box-shadow: 3px 6px 0px $color-two;
    border: 1px solid $color-two;
  }
}

.MenuIcon {
  position: absolute;
  top: calc(50% - 20px);
  left: 0;
  width: 40px;
  height: 40px;
  stroke-width: 2;
  color: $icon-menu-color;
}
</style>
