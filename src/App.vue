<script setup lang="ts">
import FlipCard from '@/components/flip-card.vue';
</script>

<template>
  <div class="wrapper">
    <FlipCard>
      <template #front>
        <div class="test-1" >Содержимое передней стороны</div>
        <button class="button-flip-card">Перевернуть</button>
      </template>
      <template #back>
        <div class="test-2" >Содержимое задней стороны</div>
        <button class="button-flip-card">Перевернуть</button>
      </template>
    </FlipCard>
  </div>
</template>

<style lang="scss" scoped>
.test-1 {
  width: 400px;
  height: 400px;
  background-color: red;
  margin: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.test-2 {
  width: 400px;
  height: 400px;
  background-color: green;
  margin: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
