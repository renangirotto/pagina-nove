<template>
  <blockquote class="custom-blockquote">
    <slot mdc-unwrap="p" />
  </blockquote>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.custom-blockquote {
  border-inline-start: 4px solid var(--color-purple-100);
  padding-block: 8px;
  padding-inline: 12px 16px;
  font-family: "Raleway", sans-serif;
  font-size: 1.125rem;
  font-style: italic;
  font-weight: 600;
  color: var(--color-grey-light-1100);
  line-height: 1.8;

  &:not(:last-child) {
    margin-block-end: 32px;

    &:has(+ h1),
    &:has(+ h2),
    &:has(+ h3) {
      margin-block-end: 64px;
    }
  }
}
</style>
