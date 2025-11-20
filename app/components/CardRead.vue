<template>
  <article class="card-read">
    <nuxt-link :aria-label="title" class="card-link" :to="path">
      <figure aria-hidden="true" class="card-figure">
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
.card-figure {
  height: 100%;
  position: relative;
  z-index: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: scale 0.3s ease;
  }
}

.card-link {
  display: contents;
  aspect-ratio: 3 / 4.4;
}

.card-read {
  border-radius: 4px;
  overflow: hidden;

  &:hover {
    img {
      scale: 1.025;
    }
  }
}
</style>
