<template>
  <section class="section ContactSection" id="Contact">
    <div class="container">
      <div class="ContactCta">
        <h2 class="is-size-3">Are you hiring?</h2>
        <p class="ContactCta__Subtitle">I am here to help you.</p>
        <a href="mailto:hello@viliusdzemyda.com?subject=Say Hi" class="button is-primary">Say Hi</a>
      </div>
    </div>
  </section>
</template>

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
