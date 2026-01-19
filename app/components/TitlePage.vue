<template>
  <custom-tag class="title-page">
    <slot mdc-unwrap="p" />
  </custom-tag>
</template>

<script lang="ts" setup>
const props = defineProps<{
  customTag?: string;
}>();

const CustomTag = props.customTag || "h1";
</script>

<style>
.title-page {
  --icon-size: clamp(1.375rem, 2.5vw, 1.75rem);

  font-size: clamp(2rem, 3vw, 2.5rem);
  font-style: bold;
  font-weight: 700;

  &:not(:last-child) {
    margin-block-end: 24px;
  }
}
</style>
