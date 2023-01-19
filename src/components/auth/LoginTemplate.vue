<script setup>
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark({
  selector: "body",
  attribute: "class",
  valueDark: "dark",
  valueLight: "light",
});
const toggleDard = useToggle(isDark);
</script>

<template>
  <div>
    <h1>Autenticação</h1>
    <h2>{{ isDark }}</h2>
    <button @click="toggleDard()">teste</button>
  </div>
</template>

<style lang="scss" scoped></style>
