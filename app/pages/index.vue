<template>
  <section>
    <layout-container>
      <title-page>
        <custom-icon aria-hidden="true" name="pen-tool" /> Últimas Notas
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
    <layout-container>
      <title-page custom-tag="h2">
        <custom-icon aria-hidden="true" name="open-book" /> Últimas leituras
      </title-page>

      <grid-read v-if="readingList">
        <card-read
          v-for="item in readingList"
          :key="item.path"
          :cover="item.cover"
          :path="item.path"
          :publisher="item.publisher"
          :rating="item.rating"
          :series-type="item.seriesType"
          :title="item.title"
        />
      </grid-read>
    </layout-container>
  </section>
</template>

<script lang="ts" setup>
import getSetiesType from "@/utils/series-type";

const { data: notas } = await useAsyncData("navigation-notes-list-home", () => {
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
  "navigation-reading-list-home",
  () => {
    return queryCollectionNavigation(
      "leituras",
      queriesCollections.leituras
    ).order("date", "DESC");
  }
);

const readingList = computed(() => {
  if (!leituras.value?.[0]?.children?.length) {
    return null;
  }

  const children = leituras.value[0].children as ReadingItem[];

  return children.slice(0, 4).map((item) => {
    return {
      ...item,
      seriesType: getSetiesType(item.collection as string | undefined),
    };
  });
});

const readingListAsNotes = computed(() => {
  return getReadingsAsNotes(leituras?.value?.[0]?.children);
});

const notesListWithReadings = computed(() => {
  return mergeNotesReadings({
    notes: notesList.value,
    readings: readingListAsNotes.value,
  }).slice(0, 3);
});
</script>

<style></style>
