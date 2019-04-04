<template>
  <section class="section ContactSection" id="Contact">
    <div class="container">
      <div class="ContactCta">
        <h2 class="is-size-3">Are you hiring?</h2>
        <p class="ContactCta__Subtitle">I am available.</p>
        <ButtonMail/>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonMail from '~/components/Buttons/ButtonMail.vue'

export default {
  components: {
    ButtonMail,
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/_variables.scss';

$contact-section-background: #fff !default;

.ContactSection {
  background: $contact-section-background;
}

.ContactCta {
  padding-top: 24px;
  text-align: center;
  font-size: 18px;

  h2 {
    font-weight: 500;
  }
}

.ContactCta__Subtitle {
  margin: 16px 0 36px 0;
}
</style>
