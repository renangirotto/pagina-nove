<template>
  <article class="card-read">
    <nuxt-link :aria-label="title" class="card-link" :to="path">
      <div class="card-info">
        <p class="card-info-pill">{{ date }}</p>
        <div class="card-info-pill">
          <rating-bar :rating="rating" />
        </div>
      </div>
      <figure aria-hidden="true" class="card-figure">
        <nuxt-img loading="lazy" :src="`/images/covers/${cover}`" alt="" />
      </figure>
    </nuxt-link>
  </article>
</template>

<script lang="ts" setup>
defineProps<{
  cover: string;
  date: string;
  path: string;
  rating: string;
  title: string;
}>();
</script>

<style lang="scss" scoped>
.card-figure {
  grid-area: card;
  height: 100%;
  border-radius: 4px;
  position: relative;
  z-index: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: scale 0.3s ease;
  }
}

.card-info {
  grid-area: card;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-block: 8px;
  padding-inline: 8px;
  z-index: 1;
}

.card-info-pill {
  --rating-icon-size: 16px;
  --rating-color-filled: var(--color-purple-200);
  width: fit-content;
  padding-block: 4px;
  padding-inline: 8px;
  border-radius: 4px;
  border: 1px solid var(--color-purple-100);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-yellow-grey-100);
  background: var(--color-purple-100);

  @include container-tablet {
    --rating-icon-size: 24px;
  }

  @include container-desktop {
    font-size: 0.875rem;
  }

  &:last-child {
    align-self: center;
  }
}

.card-link {
  display: grid;
  grid-template-areas: "card";
  height: 100%;
  text-decoration: none;
}

.card-read {
  aspect-ratio: 3 / 4.4;

  &:hover {
    img {
      scale: 1.025;
    }
  }
}
</style>
