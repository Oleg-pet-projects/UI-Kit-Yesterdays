<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    border?: number;
    color?: string;
  }>(),
  {
    disabled: false,
    border: 0,
    color: 'red'
  }
);

const buttonStyle = computed(() => ({
  border: `${props.border}px solid ${props.color}`,
  cursor: props.disabled ? 'not-allowed' : 'pointer',
  opacity: props.disabled ? 0.6 : 1
}));
</script>

<template>
  <button :disabled="props.disabled" :style="buttonStyle">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2vmin;
  border-radius: 4vmin;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.1s ease;

  &:active:not(:disabled) {
    transform: scale(0.98);
  }
}
</style>
