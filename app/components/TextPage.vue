<template>
  <custom-tag class="text-page"> <slot /> </custom-tag>
</template>

<script lang="ts" setup>
const props = defineProps<{
  customTag?: string;
}>();

const CustomTag = props.customTag || "p";
</script>

<style lang="scss">
.text-page {
  font-family: "Raleway", sans-serif;
  font-size: 1.125rem;
  font-weight: 500;

  &:not(:last-child) {
    margin-block-end: 32px;

    &:has(+ :not(p)) {
      margin-block-end: 64px;
    }
  }

  [data-ui-text-big] {
    font-weight: bold;
    font-size: clamp(1.5rem, 3vw, 1.75rem);
    line-height: 1.5;
    color: var(--color-purple-200);
  }

  [data-ui-text-highlight] {
    color: var(--color-purple-200);
  }
}
</style>
