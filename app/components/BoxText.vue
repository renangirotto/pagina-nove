<template>
  <div class="box" :data-ui-variant="variant">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  variant?: "purple";
}>();
</script>

<style lang="scss" scoped>
.box {
  padding-block: 32px;
  padding-inline: 32px;
  border-radius: 16px;
  background: var(--box-background, var(--color-grey-light-50));

  &[data-ui-variant="purple"] {
    --box-background: var(--color-purple-50);
  }
}
</style>
