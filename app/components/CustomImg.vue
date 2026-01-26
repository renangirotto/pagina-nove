<template>
  <figure class="custom-img">
    <nuxt-img :src="src" />
  </figure>
</template>

<script lang="ts" setup>
defineProps<{
  alt?: string;
  src: string;
}>();
</script>

<style lang="scss" scoped>
.custom-img {
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
  }

  &:not(:last-child) {
    margin-block-end: 40px;

    @include container-desktop {
      margin-block-end: 64px;
    }
  }
}
</style>
