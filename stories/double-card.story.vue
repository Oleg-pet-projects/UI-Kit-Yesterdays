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
import DoubleCard from '../src/ui/double-card.vue';
import { ref } from 'vue';

// Создаём реактивные переменные для HTML-содержимого лицевой и обратной сторон
const content1 = ref(`
  <div style="width: 200px; height: 200px; background-color: red; margin: 12px; display: flex; align-items: center; justify-content: center; flex-direction: column;">
    Лицевая сторона
    <button class="button-flip-card" style="margin-top: 12px;">Перевернуть</button>
  </div>
`);

const content2 = ref(`
  <div style="width: 200px; height: 200px; background-color: green; margin: 12px; display: flex; align-items: center; justify-content: center; flex-direction: column;">
    Обратная сторона
    <button class="button-flip-card" style="margin-top: 12px;">Перевернуть</button>
  </div>
`);
</script>

<template>
  <Story title="double-card">
    <Variant title="Пример карточки 1">
      <DoubleCard>
        <template #front>
          <!-- Передаём содержимое как HTML-разметку -->
          <div v-html="content1"></div>
        </template>
        <template #back>
          <!-- Передаём содержимое как HTML-разметку -->
          <div v-html="content2"></div>
        </template>
      </DoubleCard>

      <template #controls>
        <!-- Панель контролов для редактирования HTML-содержимого -->
        <HstTextarea v-model="content1" title="Лицевая сторона:" />
        <HstTextarea v-model="content2" title="Обратная сторона:" />
      </template>
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
