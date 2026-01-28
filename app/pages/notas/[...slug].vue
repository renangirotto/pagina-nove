<template>
  <layout-container class="layout-notes">
    <div class="hero-note">
      <title-page>{{ page?.title }}</title-page>
      <time class="hero-note-time" :datetime="page?.dateNote">{{
        dateFormatted
      }}</time>
      <!-- <figure class="hero-note-figure">
        <nuxt-img src="https://placehold.co/600x400" />
      </figure> -->
    </div>
    <div class="layout-notes-content">
      <ContentRenderer v-if="page" :value="page" />
    </div>
  </layout-container>
</template>

<script lang="ts" setup>
const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("notas").path(route.path).first();
});

const dateFormatted = computed(() => {
  return formatDate(page.value?.dateNote || "");
});

useSeoMeta({
  title: `${page.value?.title} | Página Nove`,
});
</script>

<style lang="scss">
.layout-notes {
  @include container-desktop {
    padding-inline: 16px;
  }
}

.layout-notes-content {
  max-width: 860px;
  margin-inline: auto;
}

.hero-note {
  --title-page-font-size: clamp(2.5rem, 3.5vw, 3rem);
  margin-block-end: 48px;
}

.hero-note-figure {
  width: 100%;

  img {
    width: 100%;
  }
}

.hero-note-time {
  display: block;
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--color-grey-light-1100);

  &:not(:last-child) {
    margin-block-end: 24px;
  }
}
</style>
