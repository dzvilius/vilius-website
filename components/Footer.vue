<template>
  <footer class="footer AppFooter">
    <div class="container">
      <div class="AppFooter__Social">
        <a
          href="https://github.com/dzvilius"
          class="SocialLink"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
        >
          <IconGitHub class="SocialIcon" />
        </a>
        <a
          href="mailto:hello@viliusdzemyda.com?subject=Website%20Contact"
          class="SocialLink"
          aria-label="Mail"
        >
          <IconMail class="SocialIcon" />
        </a>
      </div>
      <div class="AppFooter__Copyright">
        <span>&copy; {{ currentYear }} Vilius Dzemyda</span>
      </div>
    </div>
  </footer>
</template>

<script>
import IconGitHub from '~/components/Icons/IconGitHub.vue'
import IconSpotify from '~/components/Icons/IconSpotify.vue'
import IconMail from '~/components/Icons/IconMail.vue'

export default {
  data: function() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
  components: {
    IconGitHub,
    IconSpotify,
    IconMail,
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/_variables.scss';

$social-icon-background: #f8fafb !default;
$social-icon-color: $color-one !default;

.AppFooter {
  text-align: center;
}

.AppFooter__Social {
  padding: 48px 0;
  text-align: center;
}

.SocialLink {
  display: inline-block;
  margin: 0 12px;
  padding: 10px;
  background: $social-icon-background;
  color: $social-icon-color;
  border-radius: 100px;

  &:hover {
    background: #ddeeff;
  }
}

.SocialIcon {
  width: 22px;
  height: 22px;
  vertical-align: top;
}

.AppFooter__Copyright {
  padding-top: 1rem;
  padding-bottom: 2rem;
  color: #4f5670;
  font-size: 14px;
}
</style>
