import type { CollectionEntry } from "astro:content";

import { ROUTES } from "@utils/constants";
import formatDate from "@utils/format-date";
import { getCoverPath } from "@utils/get-cover-path";
import getSeriesType from "@utils/series-type";

export default function formatEntryToCardRead(
  entry: CollectionEntry<"readings">,
) {
  return {
    cover: getCoverPath(entry.data.cover, entry.data.series, entry.data.title),
    date: formatDate(entry.data.date),
    id: entry.id,
    label: entry.data.label,
    publisher: entry.data.publisher,
    tags: entry.data.tags,
    seriesType: getSeriesType(entry.data.series),
    slug: `${ROUTES.readings}${entry.id}/`,
    title: entry.data.title,
  };
}
