<template>
  <nav
    class="navbar is-fixed-top"
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
            href="./files/Vilius_Dzemyda_CV.pdf"
            target="_blank"
            class="navbar-item"
          >
            CV
          </a>
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
@import 'assets/scss/_variables.scss';

$navbar-menu-background-color: #fff !default;
$icon-menu-color: $color-ink !default;

.navbar-item {
  font-size: 15px;
  padding: 6px 24px;
  text-transform: uppercase;
  font-weight: 700;
  color: $color-one;

  @media screen and (min-width: 1024px) {
    padding: 0.5rem 1rem;
    font-size: 16px;
  }
}

.NavbarLogo {
  position: absolute;
  top: 14px;
  left: 21px;
}

.navbar-burger {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.navbar-burger:hover {
  background-color: transparent;
}

.navbar-menu {
  @media screen and (max-width: 1023px) {
    right: 16px;
    top: 74px;
    position: absolute;
    width: 120px;
    background-color: $navbar-menu-background-color;
    border-radius: 8px;
    padding: 12px 0;
    box-shadow: 3px 6px 0px #dcefff;
    border: 1px solid #dcefff;
  }
}

.MenuIcon {
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
  width: 40px;
  height: 40px;
  stroke-width: 2;
  color: $icon-menu-color;
}
</style>
