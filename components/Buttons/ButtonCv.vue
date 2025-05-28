<template>
  <a href="./files/Vilius_Dzemyda_CV.pdf" class="button ButtonCv" target="_blank">Download CV</a>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as *;

.ButtonCv {
  color: #fff;
  border-color: transparent;
  outline: none;
  background-color: #27dabc;
  box-shadow: 2px 3px 0px #14c19f;
  font-weight: 500;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.4);

  &:hover {
    background-color: #26d0b4;
  }
}
</style>
