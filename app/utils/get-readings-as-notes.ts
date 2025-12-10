import type { ContentNavigationItem } from "@nuxt/content";

export default (
  readings: ContentNavigationItem[] | undefined
): ReadingAsNote[] => {
  if (!readings?.length) {
    return [];
  }

  return readings.filter(
    (item) =>
      item.dateNote !== undefined &&
      item.dateNote !== null &&
      item.dateNote !== ""
  ) as ReadingAsNote[];
};
