<docs lang="md">
# Flip Card Component

Компонент **Flip Card** (переворачивающаяся карточка) предназначен для отображения двух состояний – лицевой и обратной сторон – с плавной анимацией переворота. Он позволяет пользователю легко переключаться между сторонами карточки посредством клика по кнопке, обеспечивающей интерактивность.

## Особенности

- **Двустороннее отображение:**  
  С помощью именованных слотов `front` и `back` вы можете задавать произвольное содержимое для каждой стороны карточки.

- **Интерактивный переключатель:**  
  При клике по элементу с классом `button-flip-card` вызывается функция, которая переключает состояние карточки, изменяя переменную `isFlipped` и инициируя анимацию.

- **Плавная анимация:**  
  Использование 3D-трансформаций и свойства `transition` обеспечивает эффект мягкого переворота карточки с заданной длительностью анимации.

- **Гибкая стилизация:**  
  Компонент стилизован с использованием SCSS, что позволяет легко адаптировать его внешний вид в соответствии с потребностями вашего проекта.

## Пример использования

```vue copy
<DoubleCard>
  <template #front>
    <div>Содержимое передней стороны</div>
    <button class="button-flip-card">Перевернуть</button>
  </template>
  <template #back>
    <div>Содержимое задней стороны</div>
    <button class="button-flip-card">Перевернуть</button>
  </template>
</DoubleCard>
```
</docs>

<script setup>
import FlipCard from '@/components/flip-card.vue';
</script>

<template>
  <Story title="double-card">
    <Variant title="Пример карточки 1">
      <FlipCard>
        <template #front>
          <div class="test-1">Содержимое передней стороны</div>
          <button class="button-flip-card">Перевернуть</button>
        </template>
        <template #back>
          <div class="test-2">Содержимое задней стороны</div>
          <button class="button-flip-card">Перевернуть</button>
        </template>
      </FlipCard>
    </Variant>
  </Story>
</template>

<style lang="scss" scoped>
.test-1 {
  width: 200px;
  height: 200px;
  background-color: red;
  margin: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.test-2 {
  width: 200px;
  height: 200px;
  background-color: green;
  margin: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
