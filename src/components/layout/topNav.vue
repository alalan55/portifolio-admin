<script setup></script>

<template>
  <div class="wrapper">
    <div class="wrapper__date">
      <span> 25/05/2023 14:54 </span>
    </div>
    <div class="wrapper__profile">
      <span>Olá, Alan!</span>
      <figure></figure>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.wrapper {
  height: 100%;
  width: 100%;
  color: $pa-text-light-1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $pa-s-1;

  &__date {
    span {
      font-weight: 600;
      font-size: 1em;
    }
  }

  &__profile {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span {
      font-weight: 700;
      font-size: 1.2em;
    }
    figure {
      width: 55px;
      height: 55px;
      border-radius: 50%;
      border: 1px solid $pa-text-light-1;
    }
  }
}
</style>
