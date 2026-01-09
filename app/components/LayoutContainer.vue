<template>
  <div class="container" :data-ui-divider="divider || null">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  divider?: boolean;
}>();
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: var(--layout-container-width, 1088px);
  margin-inline: auto;

  &:not(:last-child) {
    margin-block-end: 72px;
  }

  &[data-ui-divider] {
    padding-block-end: 72px;
    border-block-end: 1px solid var(--color-grey-light-100);
  }
}
</style>
