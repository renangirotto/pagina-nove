<template>
  <nuxt-icon :name="name" filled />
</template>

<script lang="ts" setup>
defineProps<{ name: string }>();
</script>

<style>
.nuxt-icon svg {
  width: var(--icon-width, 24px);
  height: var(--icon-height, 24px);
  margin-bottom: 0;
}
</style>
