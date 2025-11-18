<template>
  <div class="grid-notes">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.grid-notes {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  grid-auto-rows: auto;
  gap: 24px 0px;

  @include container-desktop {
    grid-template-columns: calc(32% - 24px) repeat(2, auto);
    grid-template-areas:
      "first first ."
      "first first ."
      ". . .";
    gap: 24px 24px;
  }

  > *:nth-child(1) {
    @include container-desktop {
      grid-area: first;
    }
  }

  > *:nth-child(n + 4) {
    @include container-desktop {
      grid-column: 1 / -1;
    }
  }
}
</style>
