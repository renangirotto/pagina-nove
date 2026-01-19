<template>
  <layout-container>
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

<style></style>
