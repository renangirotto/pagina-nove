interface LeiturasCollectionAsItem {
  collection?: string;
  cover: string;
  date: string;
  publisher: string;
  rating: string;
  title: string;
  path: string;
}

interface LeiturasCollectionAsNotes {
  cover: string;
  dateNote: string;
  title: string;
  path: string;
}

interface NotasCollectionAsItem {
  cover: string;
  dateNote: string;
}

export const queriesCollections: {
  leituras: Array<keyof LeiturasCollectionAsItem>;
  leiturasAsNotes: Array<keyof LeiturasCollectionAsNotes>;
  notas: Array<keyof NotasCollectionAsItem>;
} = {
  leituras: ["collection", "cover", "date", "publisher", "rating"],
  leiturasAsNotes: ["cover", "dateNote"],
  notas: ["cover", "dateNote"],
};
