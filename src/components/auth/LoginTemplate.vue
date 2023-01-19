<script setup>
// import { useDark, useToggle } from "@vueuse/core";
// const isDark = useDark({
//   selector: "body",
//   attribute: "class",
//   valueDark: "dark",
//   valueLight: "light",
// });
// const toggleDard = useToggle(isDark);
//
</script>

<template>
  <div class="auth">
    <div class="auth__card">
      <div class="auth__card__logo">
        <h2>AO</h2>
      </div>
      <div class="auth__card__descriptions">
        <span> Insira as informações abaixo pra logar no sistema :) </span>
      </div>
      <div class="auth__card__form"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.auth {
  min-height: 100vh;
  background: $pa-black-mute;
  color: $pa-white;
  display: flex;
  align-items: center;
  justify-content: center;

  &__card {
    border: 1px solid;
    padding: $pa-s-2;
    background: $pa-white;
    border-radius: 10px;
    color: $pa-black-soft;
    &__logo {
      margin-bottom: $pa-s-1;
      h2 {
        font-weight: 800;
      }
    }
    &__descriptions {
      span {
        font-weight: 500;
      }
    }

    &__logo,
    &__descriptions {
      text-align: center;
    }
  }
}
</style>
