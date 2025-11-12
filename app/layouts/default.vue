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

  @include container-desktop {
    padding-block: 40px;
  }
}
</style>
