<template>
  <section>
    <layout-container>
      <title-page> Leituras do blog </title-page>

      <template v-for="(items, month) in readingList" :key="month">
        <h2 class="title-group">
          {{ month }}
        </h2>
        <grid-read>
          <card-read
            v-for="item in items"
            :key="item.path"
            :cover="item.cover"
            :date="item.date"
            :path="item.path"
            :publisher="item.publisher"
            :rating="item.rating"
            :series-type="item.seriesType"
            :title="item.title"
          />
        </grid-read>
      </template>
    </layout-container>
  </section>
</template>

<script lang="ts" setup>
import getSetiesType from "@/utils/series-type";
import type { ReadingItem } from "@/utils/layout-types";

useSeoMeta({
  title: `Leituras | Página Nove`,
});

const { data: leituras } = await useAsyncData("navigation-reading-list", () => {
  return queryCollectionNavigation(
    "leituras",
    queriesCollections.leituras,
  ).order("date", "DESC");
});

const readingList = computed(() => {
  if (!leituras.value?.[0]?.children?.length) {
    return null;
  }

  function formatMonthKey(yyyyMm: string): string {
    const date = new Date(`${yyyyMm}-01`);

    const formatter = new Intl.DateTimeFormat("pt-BR", {
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    });

    const dateFormatted = formatter.format(date).replace(" de ", " ");

    return dateFormatted.charAt(0).toUpperCase() + dateFormatted.slice(1);
  }

  const children = leituras.value[0].children as ReadingItem[];

  const readingListByMonth = children.reduce(
    (acc, cur) => {
      const yyyyMm = cur.date.substring(0, 7);
      const formattedKey = formatMonthKey(yyyyMm);

      if (!acc[formattedKey]) {
        acc[formattedKey] = [];
      }

      acc[formattedKey].push({
        ...cur,
        date: formatDate(cur.date || ""),
        seriesType: getSetiesType(cur.collection as string | undefined),
      });

      return acc;
    },
    {} as Record<string, ReadingItem[]>,
  );

  return readingListByMonth;
});
</script>

<style lang="scss">
.title-group {
  font-size: clamp(2rem, 2.5vw, 2.25rem);

  &:not(:last-child) {
    margin-block-end: 16px;
  }
}
</style>
