<script setup lang="ts">
import { ref } from 'vue';

const isFlipped = ref<Boolean>(false);

function handleClick(e: MouseEvent): void {
  const target = e.target as HTMLElement | null;

  if (target?.closest('.button-flip-card')) {
    isFlipped.value = !isFlipped.value;
  }
}
</script>

<template>
  <div class="wrapper">
    <div class="card" :class="{ flipped: isFlipped }" @click="handleClick">
      <div class="side front">
        <slot name="front" />
      </div>
      <div class="side back">
        <slot name="back" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    width: 100vw;
    height: 100vh;
    position: relative;
    perspective: 1000px;

    .side {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: transform 1s;
      backface-visibility: hidden;
    }

    .front {
      transform: rotateY(0deg);
    }

    .back {
      transform: rotateY(180deg);
    }

    &.flipped {
      .front {
        transform: rotateY(180deg);
      }
      .back {
        transform: rotateY(360deg);
      }
    }
  }
}
</style>
