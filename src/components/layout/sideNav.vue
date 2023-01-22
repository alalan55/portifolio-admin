<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

const emit = defineEmits(["setOpen"]);

const isOpen = ref(true);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
  console.log("data", isOpen.value);
  emit("setOpen", isOpen.value);
};

const routesArr = [
  { name: "Projetos", path: "/projects", img: "/icons/projects.svg" },
  { name: "Experiências", path: "/experiences", img: "/icons/pencil.svg" },
];
</script>

<template>
  <div class="wrapper">
    <div class="wrapper__logo">
      <h1>AO</h1>
    </div>

    <div class="wrapper__links">
      <div v-for="item in routesArr" :key="item.path" class="wrapper__links__item">
        <RouterLink to="/">
          <figure>
            <img :src="item.img" alt="Icon" />
          </figure>

          <span v-if="isOpen">
            {{ item.name }}
          </span>
        </RouterLink>
      </div>
    </div>

    <div class="wrapper__chevron" @click="toggleOpen()">
      <figure>
        <img
          :src="isOpen ? '/icons/chevron-left.svg' : '/icons/chevron-right.svg'"
          :alt="isOpen ? 'Open' : 'Close'"
        />
      </figure>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
.wrapper {
  -webkit-box-shadow: 10px -1px 58px -27px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 10px -1px 58px -27px rgba(0, 0, 0, 0.45);
  box-shadow: 10px -1px 58px -27px rgba(0, 0, 0, 0.25);
  height: 100%;
  width: 100%;
  padding: $pa-s-2;
  color: $pa-black-mute;
  position: relative;

  &__logo {
    text-align: center;
    margin-bottom: $pa-s-3;
    h1 {
      font-weight: 800;
    }
  }
  &__links {
    &__item {
      margin-bottom: 1rem;

      a {
        text-decoration: none;
        padding: 1rem;
        display: block;
        border-radius: 10px;
        text-align: center;
        font-weight: 600;
        background: $pa-indigo;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        figure {
          width: 35px;
          height: 35px;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }

        &:hover {
          background: $pa-indigo-3;
        }
      }
    }
  }
  &__chevron {
    position: absolute;
    top: 50px;
    right: -10px;
    cursor: pointer;
    figure {
      width: 28px;
      height: 28px;
      background: $pa-indigo;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
