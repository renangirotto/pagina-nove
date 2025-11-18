<template>
  <section>
    <layout-container>
      <title-page custom-tag="h2">
        <custom-icon aria-hidden="true" name="triangle-flag" /> Últimas leituras
      </title-page>

      <grid-read v-if="readingList">
        <card-read
          v-for="item in readingList"
          :key="item.path"
          :cover="item.cover"
          :path="item.path"
          :title="item.title"
        />
      </grid-read>
    </layout-container>
  </section>
</template>

<script lang="ts" setup>
import type { ContentNavigationItem } from "@nuxt/content";

interface ReadingItem extends ContentNavigationItem {
  cover: string;
  date: string;
}

useSeoMeta({
  title: `Página Nove | Um blog com textos duvidosos.`,
});

const { data: leituras } = await useAsyncData("navigation-reading-list", () => {
  return queryCollectionNavigation("leituras", ["cover", "date"]).order(
    "date",
    "DESC"
  );
});

const readingList = computed(() => {
  if (!leituras.value?.[0]?.children?.length) {
    return null;
  }

  const children = leituras.value[0].children as ReadingItem[];

  return children.slice(0, 5);
});
</script>

<style></style>
