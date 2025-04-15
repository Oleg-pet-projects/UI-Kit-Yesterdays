<template>
  <div class="wrapper">
    <div class="card" :class="{ flipped: isFlipped }" @click="handleClick">
      <div class="side front">
        <slot name="front"></slot>
      </div>
      <div class="side back">
        <slot name="back"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isFlipped = ref(false);

function toggleFlip() {
  isFlipped.value = !isFlipped.value;
}

function handleClick(e) {
  if (e.target.closest('.button-flip-card')) {
    toggleFlip();
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    width: 300px;
    height: 300px;
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
