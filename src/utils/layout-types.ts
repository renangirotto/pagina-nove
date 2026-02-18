export interface NotesAsItem {
  collection: string[];
  cover: string;
  dateNote: string;
  tags?: string[];
}

export interface ReadingItem {
  cover: string;
  date: string;
  id: string;
  publisher: string[];
  rating: string;
  seriesType?: string;
  slug: string;
  title: string;
}

export interface ReadingAsNote {
  cover: string;
  dateNote: string;
}
