<template>
  <layout-container>
    <h1 class="title-page">
      <custom-icon aria-hidden="true" name="triangle-flag" /> Leituras
      finalizadas
    </h1>

    <template v-for="(items, month) in readingList" :key="month">
      <h2 class="title-group">
        {{ month }}
      </h2>
      <div class="grid">
        <article v-for="item in items" :key="item.path">
          <nuxt-link :aria-label="item.title" :to="item.path">
            <figure aria-hidden="true">
              <img :src="`/images/covers/${item.cover}`" alt="" />
            </figure>
          </nuxt-link>
        </article>
      </div>
    </template>
  </layout-container>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import type { ContentNavigationItem } from "@nuxt/content";

interface ReadingItem extends ContentNavigationItem {
  cover: string;
  date: string;
}

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
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 112px);
  grid-auto-flow: row;
  grid-auto-rows: 1fr;
  gap: 8px;

  @include container-tablet {
    grid-template-columns: repeat(auto-fit, minmax(112px, 174px));
    gap: 12px;
  }

  @include container-desktop {
    grid-template-columns: repeat(auto-fit, minmax(112px, 204px));
    gap: 16px;
  }

  &:not(:last-child) {
    margin-block-end: 32px;

    @include container-desktop {
      margin-block-end: 64px;
    }
  }

  article {
    border-radius: 4px;
    overflow: hidden;

    &:hover {
      img {
        scale: 1.025;
      }
    }

    a {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      aspect-ratio: 3 / 4;
      padding-block: 12px;
      padding-inline: 12px;
      position: relative;
    }

    figure {
      position: absolute;
      inset: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: scale 0.3s ease;
      }
    }
  }
}

.title-group {
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);

  &:not(:last-child) {
    margin-block-end: 16px;
  }
}
</style>
