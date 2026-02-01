<template>
  <article class="card-note">
    <nuxt-link :to="path">
      <figure class="card-figure">
        <nuxt-img :src="cover" />
      </figure>
      <div class="card-content">
        <template v-if="tags && tags.length > 0">
          <div class="card-tags">
            <tag-pill v-for="tag in tags" :key="tag">{{ tag }}</tag-pill>
          </div>
        </template>
        <div>
          <p class="card-date">{{ dateNote }}</p>
          <h3 class="card-title">
            {{ title }}
          </h3>
        </div>
      </div>
    </nuxt-link>
  </article>
</template>

<script lang="ts" setup>
import TagPill from "./TagPill.vue";

defineProps<{
  cover: string;
  dateNote: string;
  path: string;
  tags?: string[];
  title: string;
}>();
</script>

<style lang="scss" scoped>
.card-content {
  grid-area: content;
  padding-inline-start: 12px;

  &:has(.card-tags) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
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
    object-position: top;
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
  overflow: hidden;

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
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.5) 50%
      );
    }

    .card-figure {
      max-width: none;
      width: 100%;
      max-height: 352px;
      position: relative;
      z-index: 0;
    }

    .card-title {
      --card-note-title: clamp(1.75rem, 3vw, 2rem);
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
    color: var(--color-yellow-grey-100);
  }
}

.card-title {
  font-size: var(--card-note-title, clamp(1.5rem, 2.5vw, 1.75rem));
}
</style>
