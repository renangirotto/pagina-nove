<template>
  <h1 class="title-page">
    <slot />
  </h1>
</template>

<script lang="ts" setup></script>

<style>
.title-page {
  --icon-size: clamp(1.375rem, 2.5vw, 1.75rem);

  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-style: bold;
  font-weight: 700;

  &:not(:last-child) {
    margin-block-end: 16px;
  }
}
</style>
