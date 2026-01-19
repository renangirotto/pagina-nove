<template>
  <a class="link-text" :href="props.href">
    <slot />
  </a>
</template>

<script lang="ts" setup>
const props = defineProps<{
  href: string;
}>();
</script>

<style lang="scss" scoped>
.link-text {
  display: inline-block;
  padding-inline: 2px;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  text-decoration: none;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 70%,
    rgba(var(--color-purple-100-rgb), 0.5) 70%,
    rgba(var(--color-purple-100-rgb), 0.5) 100%
  );

  &:hover {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 50%,
      rgba(var(--color-purple-100-rgb), 0.5) 50%,
      rgba(var(--color-purple-100-rgb), 0.5) 100%
    );
  }
}
</style>
