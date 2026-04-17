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

const slugsTarget = {
  ["notes"]: ``,
  ["readings"]: `#read-note`,
};

const tags = {
  ["notes"]: [],
  ["readings"]: ["ANÁLISE"],
};

const title = {
  ["notes"]: `title`,
  ["readings"]: `titleNote`,
};

export default function formatEntryToCardNote(entry: CardsNotesEntry) {
  const getTags = () => {
    if (entry.data.tags?.length > 0) {
      return [...entry.data.tags, ...tags[entry.collection]];
    }

    return tags[entry.collection];
  };

  return {
    cover: entry.data[covers[entry.collection]],
    dateNote: formatDate(entry.data.dateNote),
    slug: `${slugs[entry.collection]}${entry.id}/${slugsTarget[entry.collection]}`,
    tags: getTags(),
    title: entry.data[title[entry.collection]],
    titleIssue: entry.collection === "readings" ? entry.data.title : null,
  };
}
