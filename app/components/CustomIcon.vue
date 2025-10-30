<template>
  <nuxt-icon :name="name" filled />
</template>

<script lang="ts" setup>
defineProps<{ name: string }>();
</script>

<style lang="scss">
.nuxt-icon svg {
  min-width: var(--icon-width, 24px);
  width: var(--icon-width, 24px);
  height: var(--icon-height, 24px);
  margin-bottom: 0;

  #path-light {
    fill: var(--icon-color-light, currentColor);
  }

  #path-dark {
    fill: var(--icon-color-dark, currentColor);
  }
}
</style>
