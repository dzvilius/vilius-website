<template>
  <div class="ContactCta">
    <h2 class="ContactCta__Title">Are you hiring?</h2>
    <div class="TitleLine"></div>
    <p class="ContactCta__Subtitle">That's great! I am always interested in new opportunities.</p>
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
@use '@/assets/scss/variables' as *;

.ContactCta {
  padding-top: 24px;
  text-align: center;
  font-size: 18px;
}

.ContactCta__Title {
  color: $color-one;
  font-weight: 500;
  font-size: 32px;
  text-align: center;
}

.TitleLine {
  background: #66eecc;
  margin: 12px auto;
  border-radius: 4px;
  height: 4px;
  width: 60px;
}

.ContactCta__Subtitle {
  margin: 16px 0 46px 0;
}
</style>
