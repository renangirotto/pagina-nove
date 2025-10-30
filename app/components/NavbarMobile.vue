<template>
  <nav>
    <button class="button-menu" aria-label="Abrir menu">
      <custom-icon name="menu" />
    </button>
  </nav>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.button-menu {
  --icon-width: 24px;
  --icon-height: 24px;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 8px;
  padding-inline: 8px;
  border: none;
  border-radius: 4px;
  background: none;
}
</style>
