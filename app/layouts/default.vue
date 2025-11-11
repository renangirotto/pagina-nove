<template>
  <div>
    <!-- <header class="header">
      <LayoutContainer class="header-container">
        <figure>
      <img src="/logo.png" alt="Logo" width="150" height="150" />
    </figure>

        <NavbarMobile />
      </LayoutContainer>
    </header> -->
    <main class="layout-main">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.header {
  padding-inline: 24px;

  &:not(:last-child) {
    margin-block-end: 16px;

    .header-container {
      border-block-end: 1px solid var(--color-grey-light-100);
    }
  }
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-block: 16px;
}

.layout-main {
  padding-block: 32px;
  padding-inline: 16px;
}
</style>
