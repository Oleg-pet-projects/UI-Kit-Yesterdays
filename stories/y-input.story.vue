<docs lang="md">
# YInput Component

Это самая обычная кнопка

## Пример использования

```vue copy
<YInput
  v-model="text"
  label="Имя"
  placeholder="Введите имя"
  :error="text ? '' : 'Обязательное поле'"
/>
```
</docs>

<script setup>
import YInput from '../src/components/y-input.vue';
import { ref } from 'vue';
const text = ref(123);
</script>

<template>
  <Story title="Y-Input">
    <Variant title="С ошибкой">
      <YInput v-model="text" label="Имя" placeholder="Введите имя" error="Поле обязательно" />
    </Variant>

    <Variant title="Отключено">
      <YInput v-model="text" label="Имя" placeholder="Введите имя" disabled />
    </Variant>
  </Story>
</template>
