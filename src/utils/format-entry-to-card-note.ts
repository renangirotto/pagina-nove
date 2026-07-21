import type { CollectionEntry } from "astro:content";

import { ROUTES } from "@utils/constants";
import formatDate from "@utils/format-date";

export default function formatEntryToCardNote(entry: CollectionEntry<"notes">) {
  return {
    cover: entry.data.cover,
    dateNote: formatDate(entry.data.dateNote),
    issue: entry.data.issue ?? null,
    slug: `${ROUTES.notes}${entry.id}/`,
    subTitle: entry.data.subTitle ?? null,
    tags: entry.data.tags ?? [],
    title: entry.data.title,
  };
}
