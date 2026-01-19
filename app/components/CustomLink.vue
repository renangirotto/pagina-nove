<template>
  <a class="custom-link" :href="props.href">
    <slot />
  </a>
</template>

<script lang="ts" setup>
const props = defineProps<{
  href: string;
}>();
</script>

<style lang="scss" scoped>
.custom-link {
  box-decoration-break: clone;
  padding-inline: 2px;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  text-decoration-thickness: 2px;
  color: var(--color-purple-200);
  transition: background 0.25s ease-in-out;

  &:hover {
    background: rgb(from var(--color-purple-200) r g b / 0.25);
  }
}
</style>
