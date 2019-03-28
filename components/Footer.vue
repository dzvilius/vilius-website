<template>
  <footer class="footer AppFooter">
    <div class="container">
      <div class="AppFooter__Social">
        <a href="https://linkedin.com/in/viliusdzemyda" class="SocialLink" target="_blank">
          <IconLinkedIn class="SocialIcon"/>
        </a>
        <a href="https://github.com/viliusdev" class="SocialLink" target="_blank">
          <IconGitHub class="SocialIcon"/>
        </a>
        <a href="mailto:hello@viliusdzemyda.com?subject=Say Hi" class="SocialLink">
          <IconMail class="SocialIcon"/>
        </a>
      </div>
      <div class="AppFooter__Copyright">
        <span>&copy; {{ currentYear }} Vilius Dzemyda</span>
      </div>
    </div>
  </footer>
</template>

<script>
import IconLinkedIn from '~/components/icons/IconLinkedIn.vue'
import IconGitHub from '~/components/icons/IconGitHub.vue'
import IconMail from '~/components/icons/IconMail.vue'

export default {
  data: function() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
  components: {
    IconLinkedIn,
    IconGitHub,
    IconMail,
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/_variables.scss';

$social-icon-background: $color-sky-lighter !default;
$social-icon-color: $color-primary !default;

.AppFooter {
  text-align: center;
}

.AppFooter__Social {
  padding: 72px 0;
  text-align: center;
}

.SocialLink {
  display: inline-block;
  margin: 0 12px;
  padding: 12px;
  background: $social-icon-background;
  color: $social-icon-color;
  border-radius: 100px;
}

.SocialIcon {
  width: 32px;
  height: 32px;
  vertical-align: middle;
}

.AppFooter__Copyright {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>

