<template>
  <layout-container>
    <title-page> Notas de leitura </title-page>

    <grid-notes>
      <card-note
        v-for="note in notesListWithReadings"
        :key="note.path"
        :cover="note.cover"
        :date-note="note.dateNote"
        :path="note.path"
        :tags="note.tags"
        :title="note.title"
      />
    </grid-notes>
  </layout-container>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: `Notas | Página Nove`,
});

const { data: notas } = await useAsyncData("navigation-notes-list", () => {
  return queryCollectionNavigation("notas", queriesCollections.notas).order(
    "dateNote",
    "DESC",
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
      queriesCollections.leiturasAsNotes,
    ).order("date", "DESC");
  },
);

const readingListAsNotes = computed(() => {
  return getReadingsAsNotes(leituras?.value?.[0]?.children);
});

const notesListWithReadings = computed(() => {
  return mergeNotesReadings({
    notes: notesList.value,
    readings: readingListAsNotes.value,
  });
});
</script>

<style></style>
