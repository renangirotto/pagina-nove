<template>
  <layout-container>
    <title-page>
      <custom-icon aria-hidden="true" name="pen-tool" /> Notas
    </title-page>

    <grid-notes>
      <card-note
        v-for="note in notesListWithReadings"
        :key="note.path"
        :cover="note.cover"
        :date-note="note.dateNote"
        :path="note.path"
        :title="note.title"
      />
    </grid-notes>
  </layout-container>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: `Leituras | Página Nove`,
});

const { data: notas } = await useAsyncData("navigation-notes-list", () => {
  return queryCollectionNavigation("notas", queriesCollections.notas).order(
    "dateNote",
    "DESC"
  );
});

const notesList = computed(() => {
  if (!notas.value?.[0]?.children?.length) {
    return [];
  }

  return notas.value[0].children as NotesAsItem[];
});

const { data: leituras } = await useAsyncData(
  "navigation-reading-list-as-note",
  () => {
    return queryCollectionNavigation(
      "leituras",
      queriesCollections.leiturasAsNotes
    ).order("date", "DESC");
  }
);

const readingListAsNotes = computed(() => {
  if (!leituras.value?.[0]?.children?.length) {
    return [];
  }

  return leituras.value[0].children.filter(
    (item) =>
      item.dateNote !== undefined &&
      item.dateNote !== null &&
      item.dateNote !== ""
  ) as ReadingAsNote[];
});

const notesListWithReadings = computed(() => {
  const notesAndReadings = notesList.value.concat(readingListAsNotes.value);

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
});
</script>

<style></style>
