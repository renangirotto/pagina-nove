import type { CollectionEntry } from "astro:content";

export default (readings: Array<CollectionEntry<"readings">>) => {
  return readings.filter(
    (item) => item.data.dateNote !== undefined && item.data.dateNote !== null,
  );
};
