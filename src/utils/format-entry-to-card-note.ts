import type { CardsNotesEntry } from "./merge-notes-readings";

import { ROUTES } from "@utils/constants";
import formatDate from "@utils/format-date";

const slugs = {
  ["notes"]: `${ROUTES.notes}`,
  ["readings"]: `${ROUTES.notes}`,
};

export default function formatEntryToCardNote(entry: CardsNotesEntry) {
  return {
    cover: entry.data.cover,
    dateNote: formatDate(entry.data.dateNote),
    slug: `${slugs[entry.collection]}/${entry.id}`,
    tags: entry.data.tags,
    title: entry.data.title,
  };
}
