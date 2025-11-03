<template>
  <nuxt-icon :name="name" filled />
</template>

<script lang="ts" setup>
defineProps<{ name: string }>();
</script>

<style lang="scss">
.nuxt-icon svg {
  min-width: var(--icon-size, 24px);
  width: var(--icon-size, 24px);
  height: var(--icon-size, 24px);
  margin-bottom: 0;

  #path-light {
    fill: var(--icon-color-light, #c0b9ff);
  }

  #path-dark {
    fill: var(--icon-color-dark, #9e94fa);
  }
}
</style>
