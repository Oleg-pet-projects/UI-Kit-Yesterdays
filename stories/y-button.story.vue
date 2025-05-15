<docs lang="md">
# YButton Component

Это самая обычная кнопка

## Пример использования

```vue copy
<YButton>123</YButton>
```
</docs>

<script setup>
import YButton from '../src/components/y-button.vue'
</script>

<template>
    <Story title="Y-Button">
      <Variant title="Дефолтное состояние">
        <YButton>123</YButton>
      </Variant>
    </Story>
</template>