<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import Button from "@/components/common/TButton.vue";

const userLogin = ref({});
const loading = ref(false);
const store = useAuthStore();
const router = useRouter();

const login = async () => {
  loading.value = true;
  const isOk = await store.login(userLogin.value);
  if (isOk) router.push({ name: "home" });
  loading.value = false;
};

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
      <div class="auth__card__form">
        <form>
          <div class="item">
            <span>E-mail</span>

            <n-input
              v-model:value="userLogin.email"
              size="large"
              placeholder="E-mail"
              round
            />
          </div>
          <div class="item">
            <span>Senha</span>
            <n-input
              v-model:value="userLogin.password"
              size="large"
              placeholder="Senha"
              type="password"
              round
            />
          </div>
          <div class="action">
            <Button text="Login" :loading="loading" size="large" @click="login" />
          </div>
        </form>
      </div>
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
  padding: $pa-s-1;

  &__card {
    border: 1px solid;
    padding: $pa-s-2;
    background: $pa-white;
    border-radius: 10px;
    color: $pa-black-soft;
    max-width: 500px;
    width: 100%;
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

    &__form {
      margin: $pa-s-2 0 0;
      form {
        .item {
          @include inputItem;
          margin-bottom: $pa-s-1;
        }
        .action {
          margin-top: $pa-s-2;
        }
      }
    }
  }
}
</style>
