<template>
  <div class="container">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: var(--layout-container-width, 1088px);
  margin-inline: auto;
}
</style>
