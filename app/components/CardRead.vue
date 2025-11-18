<template>
  <article class="card-read">
    <nuxt-link :aria-label="title" :to="path">
      <figure aria-hidden="true">
        <nuxt-img loading="lazy" :src="`/images/covers/${cover}`" alt="" />
      </figure>
    </nuxt-link>
  </article>
</template>

<script lang="ts" setup>
defineProps<{
  cover: string;
  path: string;
  title: string;
}>();
</script>

<style lang="scss" scoped>
.card-read {
  border-radius: 4px;
  overflow: hidden;

  &:hover {
    img {
      scale: 1.025;
    }
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    aspect-ratio: 3 / 4.4;
    padding-block: 12px;
    padding-inline: 12px;
    position: relative;
  }

  figure {
    position: absolute;
    inset: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: scale 0.3s ease;
    }
  }
}
</style>
