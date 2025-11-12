<template>
  <nuxt-icon :class="customClass" :name="name" filled />
</template>

<script lang="ts" setup>
defineProps<{ customClass?: string; name: string }>();
</script>

<style lang="scss">
.nuxt-icon svg {
  min-width: var(--icon-size, 24px);
  width: var(--icon-size, 24px) !important;
  height: var(--icon-size, 24px) !important;
  margin-bottom: 0 !important;

  #path-light {
    fill: var(--icon-color-light, var(--color-purple-100));
  }

  #path-dark {
    fill: var(--icon-color-dark, var(--color-purple-200));
  }
}
</style>
