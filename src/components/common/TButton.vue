<script setup>
const props = defineProps({
  text: { type: String, default: "" },
  loading: { type: Boolean, default: false },
  size: { type: String, default: "small" },
  type: { type: String, default: "success" },
  variant: { type: String, default: "tonal" },
  color: { type: String, default: "#1fa01a" },
  rounded: { type: Boolean, default: false },
});
const emit = defineEmits(["click"]);
</script>

<template>
  <v-btn
    round
    :type="props.type"
    :size="props.size"
    :loading="props.loading"
    style="width: 100%"
    :color="props.color"
    :variant="props.variant"
    :rounded="props.rounded"
    @click="emit('click')"
  >
    {{ props.text }}
  </v-btn>
</template>
