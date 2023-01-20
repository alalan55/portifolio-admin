<script setup>
const props = defineProps({
  type: { type: String, default: "text" },
  placeholder: { type: String, default: "" },
  size: { type: String, default: "small" },
  // modelvalue: { type: Object, default: () => ({}) },

  modelValue: {
    type: String,
    default: "",
  },
});
defineEmits(["update:modelValue"]);
</script>

<template>
  <n-input
    :value="props.modelvalue"
    @input="$emit('update:modelValue', $event.target.value)"
    :type="props.type"
    :placeholder="props.placeholder"
    :size="props.size"
    round
  />

  <!-- <input
    type="text"
    :value="props.modelvalue"
    @input="$emit('update:modelValue', $event.target.value)"
  /> -->
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
div {
  width: 100%;
}
</style>
