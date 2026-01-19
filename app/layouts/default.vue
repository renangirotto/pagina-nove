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
  padding-block: 44px 64px;
  padding-inline: 24px;
  position: relative;
  overflow: hidden;

  @include container-desktop {
    padding-block: 44px 88px;
  }
}
</style>
