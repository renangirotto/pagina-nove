<template>
  <layout-container class="layout-notes">
    <div class="hero-note">
      <title-page>{{ page?.title }}</title-page>
      <p>{{ page?.dateNote }}</p>
    </div>
    <ContentRenderer v-if="page" :value="page" />
  </layout-container>
</template>

<script lang="ts" setup>
const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("notas").path(route.path).first();
});

useSeoMeta({
  title: `${page.value?.title} | Página Nove`,
});
</script>

<style lang="scss">
.layout-notes {
  padding-inline: 16px;
}
</style>
