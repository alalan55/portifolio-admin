<script setup>
const props = defineProps({
  text: { type: String, default: "" },
  loading: { type: Boolean, default: false },
  size: { type: String, default: "small" },
  type: { type: String, default: "success" },
});
const emit = defineEmits(["click"]);
</script>

<template>
  <n-button
    round
    :type="props.type"
    :size="props.size"
    :loading="props.loading"
    style="width: 100%"
    @click="emit('click')"
  >
    {{ props.text }}
  </n-button>
</template>

<style lang="scss" scoped></style>
