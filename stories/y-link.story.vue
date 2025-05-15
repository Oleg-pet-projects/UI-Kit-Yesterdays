<docs lang="md">
# YLink Component

Это самая обычная кнопка

## Пример использования

```vue copy
<YLink href="https://example.com">Открыть внешний сайт</YLink>
<YLink href="/about">Открыть внутреннюю страницу</YLink>
<YLink href="#" disabled>Отключённая ссылка</YLink>
```
</docs>

<script setup>
import YLink from '../src/components/y-link.vue';
</script>

<template>
  <Story title="Y-Link">
    <Variant title="Дефолтное состояние">
      <div>
        <YLink>Открыть внешний сайт</YLink>
      </div>
    </Variant>
  </Story>
</template>
