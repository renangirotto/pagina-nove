import type { CollectionEntry } from "astro:content";

export interface CardsNotesEntry {
  id: string;
  collection: "readings" | "notes";
  data: Record<string, any>;
  body?: string;
  rendered?: any;
  filePath?: string;
}

export default ({
  notes,
  readings,
}: {
  notes: Array<CollectionEntry<"notes">>;
  readings: Array<CollectionEntry<"readings">>;
}): CardsNotesEntry[] => {
  const notesAndReadings: CardsNotesEntry[] = [...readings, ...notes];

  notesAndReadings.sort((itemA, itemB) => {
    const dateA = new Date(itemA.data.dateNote);
    const dateB = new Date(itemB.data.dateNote);

    return dateB.getTime() - dateA.getTime();
  });

  return notesAndReadings;
};
