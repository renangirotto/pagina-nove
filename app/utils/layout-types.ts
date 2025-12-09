import type { ContentNavigationItem } from "@nuxt/content";

export interface ReadingItem extends ContentNavigationItem {
  cover: string;
  date: string;
  publisher: string;
  rating: string;
  seriesType: string;
}
