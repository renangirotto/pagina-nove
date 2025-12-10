export default ({
  notes,
  readings,
}: {
  notes: NotesAsItem[];
  readings: ReadingAsNote[];
}) => {
  const notesAndReadings = notes.concat(readings);

  notesAndReadings.sort(
    (
      itemA: NotesAsItem | ReadingAsNote,
      itemB: NotesAsItem | ReadingAsNote
    ) => {
      const dateA = new Date(itemA.dateNote);
      const dateB = new Date(itemB.dateNote);

      return dateB.getTime() - dateA.getTime();
    }
  );

  return notesAndReadings.map((item) => {
    return {
      ...item,
      dateNote: formatDate(item.dateNote),
    };
  });
};
