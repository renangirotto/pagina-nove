<template>
  <figure class="custom-img">
    <nuxt-img :src="src" />
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<script lang="ts" setup>
defineProps<{
  alt?: string;
  caption?: string;
  src: string;
}>();
</script>

<style lang="scss" scoped>
.custom-img {
  figcaption {
    padding-block-start: 8px;
    font-style: italic;
    font-weight: 500;
    color: var(--color-grey-light-1100);
    text-align: right;
  }

  img {
    width: 100%;
    border-radius: 4px;
  }

  &:not(:last-child) {
    margin-block-end: 40px;

    @include container-desktop {
      margin-block-end: 64px;
    }
  }
}
</style>
