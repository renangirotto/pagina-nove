<template>
  <section>
    <layout-container>
      <title-page>
        <custom-icon aria-hidden="true" name="triangle-flag" /> Leituras
        finalizadas
      </title-page>

      <template v-for="(items, month) in readingList" :key="month">
        <h2 class="title-group">
          {{ month }}
        </h2>
        <grid-read>
          <card-read
            v-for="item in items"
            :key="item.path"
            :cover="item.cover"
            :path="item.path"
            :title="item.title"
          />
        </grid-read>
      </template>
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
  title: `Leituras Finalizadas | Página Nove`,
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

      acc[formattedKey].push(cur);

      return acc;
    },
    {} as Record<string, ReadingItem[]>
  );

  return readingListByMonth;
});
</script>

<style lang="scss">
.title-group {
  font-size: clamp(1.375rem, 2.5vw, 1.75rem);

  &:not(:last-child) {
    margin-block-end: 16px;
  }
}
</style>
