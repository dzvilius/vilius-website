<template>
  <div class="ContactCta">
    <h2 class="is-size-3">Are you hiring?</h2>
    <p class="ContactCta__Subtitle">That's great!</p>
    <ButtonCv/>
  </div>
</template>

<script>
import ButtonCv from '~/components/Buttons/ButtonCv.vue'

export default {
  components: {
    ButtonCv,
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/_variables.scss';

.ContactCta {
  padding-top: 24px;
  text-align: center;
  font-size: 18px;

  h2 {
    font-weight: 500;
  }
}

.ContactCta__Subtitle {
  margin: 16px 0 46px 0;
}
</style>
