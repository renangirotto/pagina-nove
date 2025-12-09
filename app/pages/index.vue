<template>
  <section>
    <layout-container>
      <title-page custom-tag="h2">
        <custom-icon aria-hidden="true" name="open-book" /> Últimas leituras
      </title-page>

      <grid-read v-if="readingList">
        <card-read
          v-for="item in readingList"
          :key="item.path"
          :cover="item.cover"
          :path="item.path"
          :publisher="item.publisher"
          :rating="item.rating"
          :series-type="item.seriesType"
          :title="item.title"
        />
      </grid-read>
    </layout-container>
  </section>
</template>

<script lang="ts" setup>
import getSetiesType from "@/utils/series-type";
import type { ReadingItem } from "@/utils/layout-types";

useSeoMeta({
  title: `Página Nove | Um blog com textos duvidosos.`,
});

const { data: leituras } = await useAsyncData("navigation-reading-list", () => {
  return queryCollectionNavigation(
    "leituras",
    queriesCollections.leituras
  ).order("date", "DESC");
});

const readingList = computed(() => {
  if (!leituras.value?.[0]?.children?.length) {
    return null;
  }

  const children = leituras.value[0].children as ReadingItem[];

  return children.slice(0, 4).map((item) => {
    return {
      ...item,
      seriesType: getSetiesType(item.collection as string | undefined),
    };
  });
});
</script>

<style></style>
