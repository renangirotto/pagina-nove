<template>
  <div class="grid-read">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.grid-read {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-auto-flow: row;
  grid-auto-rows: 1fr;
  gap: 24px 8px;

  @include container-tablet {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 24px 12px;
  }

  @include container-desktop {
    grid-template-columns: repeat(auto-fill, minmax(205px, 1fr));
    gap: 24px 16px;
  }

  &:not(:last-child) {
    margin-block-end: 64px;
  }
}
</style>
