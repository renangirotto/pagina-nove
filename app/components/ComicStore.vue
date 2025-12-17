<template>
  <div class="store">
    <figure aria-hidden="true">
      <nuxt-img class="store-image" :src="imageUrl" alt="" />
    </figure>
    <div class="store-info">
      <h3 class="store-title">{{ title }}</h3>
      <p class="store-links">
        <a class="store-link" :href="instagram.link" target="_blank">
          {{ instagram.text }}
        </a>
        <custom-icon name="medical-cross-symbol" />
        <a class="store-link" :href="siteUrl" target="_blank">
          {{ siteUrl }}
        </a>
      </p>
      <a class="store-link" :href="address.link" target="_blank">
        {{ address.text }}
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  address: { link: string; text: string };
  imageUrl: string;
  instagram: { link: string; text: string };
  siteUrl: string;
  title: string;
}>();
</script>

<style lang="scss" scoped>
.store {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;

  @include container-desktop {
    grid-template-columns: 400px 1fr;
    grid-template-rows: auto;
  }

  &:not(:last-child) {
    margin-block-end: 40px;
  }
}

.store-links {
  --color-store-link: var(--color-grey-light-200);
  --icon-size: 12px;
  --icon-color-light: var(--color-grey-light-200);
  display: flex;
  align-items: center;
  gap: 12px;

  &:not(:last-child) {
    margin-block-end: 24px;
  }
}

.store-link {
  font-size: clamp(1rem, 3vw, 1.125rem);
  font-weight: 600;
  color: var(--color-store-link);
  text-decoration: none;

  &:hover,
  &:focus-within {
    text-decoration: underline;
  }
}

.store-title {
  font-size: clamp(1.5rem, 3vw, 2rem);

  &:not(:last-child) {
    margin-block-end: 4px;
  }
}
</style>
