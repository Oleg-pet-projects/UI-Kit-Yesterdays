<script lang="ts" setup>
import { computed } from 'vue';

type TUnderline = 'top-left' | 'top-right' | 'center' | 'bottom-right' | 'bottom-left';

const props = withDefaults(
  defineProps<{
    underline?: TUnderline;
    href?: string;
  }>(),
  {
    underline: 'center',
    href: '#'
  }
);

const underlineClass = computed(() => `underline-${props.underline}`);
</script>

<template>
  <div :class="underlineClass">
    <a :href="props.href">
      <slot />
    </a>
  </div>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    height: 2px;
    width: 0%;
    background-color: #000;
    transition: width 0.2s ease, transform 0.2s ease;
  }

  &:hover::before {
    width: 100%;
    transform: scaleX(1);
  }
}

// Общие переменные позиционирования
.underline-top-left a::before {
  top: 0;
  left: 0;
}

.underline-top-right a::before {
  top: 0;
  right: 0;
}

.underline-center a::before {
  bottom: 0;
  left: 0;
  transform-origin: center;
  width: 100%;
  transform: scaleX(0);
}

.underline-center a:hover::before {
  width: 100%;
  transform: scaleX(1);
}

.underline-bottom-right a::before {
  bottom: 0;
  right: 0;
}

.underline-bottom-left a::before {
  bottom: 0;
  left: 0;
}
</style>
