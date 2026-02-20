import type { CardsNotesEntry } from "./merge-notes-readings";

import { ROUTES } from "@utils/constants";
import formatDate from "@utils/format-date";

const covers = {
  ["notes"]: `cover`,
  ["readings"]: `coverNote`,
};

const slugs = {
  ["notes"]: `${ROUTES.notes}`,
  ["readings"]: `${ROUTES.readings}`,
};

const tags = {
  ["notes"]: [],
  ["readings"]: ["Leitura"],
};

const title = {
  ["notes"]: `title`,
  ["readings"]: `titleNote`,
};

export default function formatEntryToCardNote(entry: CardsNotesEntry) {
  return {
    cover: entry.data[covers[entry.collection]],
    dateNote: formatDate(entry.data.dateNote),
    slug: `${slugs[entry.collection]}${entry.id}/`,
    tags: tags[entry.collection],
    title: entry.data[title[entry.collection]],
  };
}
