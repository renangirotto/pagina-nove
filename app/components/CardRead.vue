<template>
  <article class="card-read">
    <nuxt-link :aria-label="title" class="card-link" :to="path">
      <div class="card-info">
        <div class="card-info-pills">
          <p class="card-info-pill">{{ publisher }}</p>
          <p class="card-info-pill">{{ seriesType }}</p>
        </div>
        <div>
          <div class="card-info-pill card-info-rating">
            <rating-bar :rating="rating" />
          </div>
          <h3 class="card-info-title">{{ title }}</h3>
          <p class="card-info-date">{{ date }}</p>
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
  publisher: string;
  rating: string;
  seriesType: string;
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
  padding-block: 6px 12px;
  padding-inline: 6px 12px;
  border-radius: 4px;
  z-index: 1;
  color: var(--color-yellow-grey-100);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.75) 80%
  );

  @include container-tablet {
    padding-block: 16px 24px;
    padding-inline: 16px;
  }
}

.card-info-date {
  font-size: 0.875rem;
}

.card-info-pills {
  --card-info-pill-pb: 4px;
  --card-info-pill-pi: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  @include container-tablet {
    --card-info-pill-pb: 6px;
    --card-info-pill-pi: 12px;
  }
}

.card-info-pill {
  --rating-icon-size: 20px;
  --rating-color-empty: var(--color-purple-200);
  --rating-color-filled: var(--color-grey-light-100);
  width: fit-content;
  padding-block: var(--card-info-pill-pb, 6px);
  padding-inline: var(--card-info-pill-pi, 12px);
  border-radius: 32px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-yellow-grey-100);
  background: var(--color-purple-100);
  box-shadow: 0px 2px 4px 0px rgba(#1f1f1f, 0.25);

  @include container-desktop {
    font-size: 0.875rem;
  }

  &:last-child {
    align-self: center;
  }
}

.card-info-rating {
  margin-block-end: 12px;
}

.card-info-title {
  font-size: clamp(1.125rem, 2.5vw, 1.25rem);

  &:not(:last-child) {
    margin-block-end: 4px;
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
