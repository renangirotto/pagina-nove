<template>
  <div>
    <header-navbar />
    <main class="layout-main">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.layout-main {
  padding-block: 32px;
  padding-inline: 16px;
  position: relative;
  overflow: hidden;

  @include container-desktop {
    padding-block: 40px;
  }
}

.pattern {
  min-width: 560px;
  width: 100dvw;
  position: absolute;
  inset-block-start: 0;
  inset-inline: 0;
  z-index: 0;

  img {
    width: 100%;
  }
}
</style>
