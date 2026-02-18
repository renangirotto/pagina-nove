import type { CollectionEntry } from "astro:content";

import { ROUTES } from "@utils/constants";
import formatDate from "@utils/format-date";
import getSeriesType from "@utils/series-type";

export default function formatEntryToCardRead(
  entry: CollectionEntry<"readings">,
) {
  return {
    cover: entry.data.cover,
    date: formatDate(entry.data.date),
    id: entry.id,
    publisher: entry.data.publisher,
    rating: entry.data.rating,
    seriesType: getSeriesType(entry.data.collection),
    slug: `${ROUTES.readings}/${entry.id}`,
    title: entry.data.title,
  };
}
