<template>
  <article class="card-note">
    <nuxt-link :to="path">
      <figure class="card-figure">
        <nuxt-img src="https://placehold.co/600x400" />
      </figure>
      <div class="card-content">
        <p class="card-date">{{ dateNote }}</p>
        <h3 class="card-title">
          {{ title }}
        </h3>
      </div>
    </nuxt-link>
  </article>
</template>

<script lang="ts" setup>
defineProps<{
  cover: string;
  dateNote: string;
  path: string;
  title: string;
}>();
</script>

<style lang="scss" scoped>
.card-content {
  grid-area: content;
  align-content: center;
  padding-inline-start: 12px;
}

.card-date {
}

.card-figure {
  aspect-ratio: 1;
  grid-area: figure;
  max-width: 156px;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;

  img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: scale 0.3s ease;
  }
}

.card-note {
  display: grid;
  grid-template-columns: 156px 1fr;
  grid-template-rows: auto;
  grid-template-areas: "figure content";
  gap: 0px;
  border-radius: 4px;

  &:not(:first-of-type) {
    padding: 4px;
    background: var(--color-grey-light-50);
  }

  &:first-of-type {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas: "all";

    .card-content,
    .card-figure {
      grid-area: all;
    }

    .card-content {
      padding-block: 24px;
      padding-inline: 24px;
      align-content: flex-end;
      position: relative;
      z-index: 1;
    }

    .card-figure {
      max-width: none;
      width: 100%;
      max-height: 352px;
      position: relative;
      z-index: 0;
    }
  }

  &:hover {
    .card-figure {
      img {
        scale: 1.025;
      }
    }
  }

  a {
    display: contents;
  }
}

.card-title {
}
</style>
