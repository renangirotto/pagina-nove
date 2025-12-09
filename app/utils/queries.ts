interface LeiturasCollectionItem {
  collection?: string;
  cover: string;
  date: string;
  publisher: string;
  rating: string;
  title: string;
  path: string;
}

export const queriesCollections: {
  leituras: Array<keyof LeiturasCollectionItem>;
} = {
  leituras: ["collection", "cover", "date", "publisher", "rating"],
};
