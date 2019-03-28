<template>
  <section class="section ContactSection" id="Contact">
    <div class="container">
      <div class="ContactCta">
        <h2 class="is-size-3">Are you hiring?</h2>
        <p class="ContactCta__Subtitle">I am here to help you.</p>
        <MailButton/>
      </div>
    </div>
  </section>
</template>

<script>
import MailButton from '~/components/MailButton.vue'

export default {
  components: {
    MailButton,
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/_variables.scss';

$contact-section-background: $color-sky-lighter !default;

.ContactSection {
  background: $contact-section-background;
}

.ContactCta {
  text-align: center;
  font-size: 18px;
}

.ContactCta__Subtitle {
  margin: 12px 0 24px 0;
}
</style>
