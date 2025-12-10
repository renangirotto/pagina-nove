import type { ContentNavigationItem } from "@nuxt/content";

export interface NotesAsItem extends ContentNavigationItem {
  cover: string;
  dateNote: string;
}

export interface ReadingItem extends ContentNavigationItem {
  cover: string;
  date: string;
  publisher: string;
  rating: string;
  seriesType: string;
}

export interface ReadingAsNote extends ContentNavigationItem {
  cover: string;
  dateNote: string;
}
