<script setup>
import { ref } from "vue";
import TopNav from "@/components/layout/topNav.vue";
import SideNav from "@/components/layout/sideNav.vue";
const isActive = ref(false);
</script>

<template>
  <div class="layout">
    <div class="layout__content" :class="{ active: isActive }">
      <div class="layout__content__side-nav">
        <!-- <h1>side nav</h1>
        <button @click="isActive = !isActive">teswte</button> -->
        <SideNav />
      </div>

      <div class="layout__content__top-nav">
        <TopNav />
      </div>

      <div class="layout__content__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
.layout {
  &__content {
    min-height: 100vh;
    & > div {
    
      //   border: 1px solid;
    }

    transition: 0.5s ease-in-out;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: $pa-s-1;
    grid-template-areas:
      "side-nav top-nav top-nav top-nav top-nav"
      "side-nav content content content content"
      "side-nav content content content content"
      "side-nav content content content content"
      "side-nav content content content content";

    &__side-nav {
      grid-area: side-nav;
     
    }
    &__top-nav {
      grid-area: top-nav;
    }
    &__content {
      grid-area: content;
    }
  }
  .active {
    grid-template-columns: repeat(8, 1fr);
    grid-template-areas:
      "side-nav  top-nav top-nav top-nav  top-nav top-nav top-nav top-nav"
      "side-nav  content content content content content content content"
      "side-nav content content content content content content content"
      "side-nav content content content  content content content content"
      "side-nav content content content content content content content";

    .layout__content__side-nav {
      max-width: 25 0px;
    }
  }
}
</style>
