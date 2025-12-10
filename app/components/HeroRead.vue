<template>
  <div class="hero-read-grid" v-bind="attrs">
    <div aria-hidden="true" class="hero-read-cover">
      <figure class="hero-read-figure">
        <nuxt-img class="hero-read-image" :src="cover" alt="" />
      </figure>
    </div>
    <div class="hero-read-info">
      <div class="hero-read-rating">
        <rating-bar :rating="rating" />
        <span>|</span>
        <p>
          {{ date }}
        </p>
      </div>
      <h2 class="hero-read-title">{{ title }}</h2>
      <div class="hero-read-texts">
        <template v-if="artists">
          <span>
            por
            {{ artists }}
          </span>
          <span>|</span>
        </template>
        <span>{{ pages }} páginas</span>
        <span>|</span>
        <span> Editora {{ publisher }} </span>
        <span>|</span>
        <span>Ano {{ publishYear }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAttrs } from "vue";

defineProps<{
  artists: string | null;
  cover: string;
  date: string;
  pages: string;
  publisher: string;
  publishYear: string;
  rating: string | number;
  title: string;
}>();

const attrs = useAttrs();
</script>

<style lang="scss" scoped>
.hero-read-figure {
  width: fit-content;
  padding-block-start: 32px;
  margin-inline: auto;
}

.hero-read-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  gap: 32px 0px;

  @include container-desktop {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
    gap: 0px 44px;
    padding-inline: 32px;
  }
}

.hero-read-image {
  width: 100%;
  min-height: calc(var(--pattern-height) + (var(--pattern-height) * 0.05));
  max-height: calc(var(--pattern-height) + (var(--pattern-height) * 0.05));
  border-radius: 4px;
}

.hero-read-info {
  align-content: center;
  text-align: center;

  @include container-desktop {
    max-height: 480px;
    color: var(--color-yellow-grey-100);
    text-align: left;
  }
}

.hero-read-rating {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--color-grey-light-200);

  @include container-desktop {
    --rating-color-empty: var(--color-purple-200);
    --rating-color-filled: var(--color-grey-light-100);
    flex-direction: row;
    color: var(--color-yellow-grey-100);
  }

  &:not(:last-child) {
    margin-block-end: 12px;
  }

  span {
    display: none;

    @include container-desktop {
      display: inline-block;
    }
  }
}

.hero-read-texts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 1.125rem;
  font-weight: 600;

  @include container-desktop {
    justify-content: flex-start;
    font-size: 1.25rem;
  }
}

.hero-read-title {
  font-size: var(--title, 2rem);

  @include container-desktop {
    --title: 2.75rem;
  }

  &:not(:last-child) {
    margin-block-end: 16px;
  }
}
</style>
