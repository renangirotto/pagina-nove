<template>
  <strong class="custom-strong">
    <slot />
  </strong>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.custom-strong {
  box-decoration-break: clone;
  display: inline;
  padding-inline: 2px;
  color: #a34d14;
  background: rgb(from #ffca80 r g b / 0.25);
}
</style>
