<template>
  <layout-container class="layout-grid">
    <div class="layout-pattern">
      <figure class="cover-pattern">
        <img src="~/assets/images/pattern.svg" />
      </figure>
    </div>
    <div v-if="page" class="layout-page">
      <hero-read
        :artists="artistsFormatted"
        :cover="`${pathImgCovers}/${page.cover}`"
        :date="dateFormatted"
        :pages="page.pages"
        :publisher="page.publisher"
        :publish-year="page.publishYear"
        :rating="page.rating"
        :title="page.title"
      />

      <template v-if="relatedNotes && relatedNotes.length > 0">
        WIP: Related notes
      </template>

      <template v-if="page.dateNote">
        aqui
        <div class="layout-section">
          <ContentRenderer v-if="page" :value="page" />
        </div>
      </template>

      <template v-if="!page.dateNote && relatedNotes?.length === 0">
        <div class="layout-section" data-ui-content="empty">
          <h2 class="title">Notas de leitura?</h2>
          <p class="empty-text">
            <strong
              >Opa! Parece que ainda não tem nenhuma nota de leitura para este
              volume e/ou coleção!</strong
            >
          </p>
          <p class="empty-text">
            Sabe, nem sempre eu estou inspirado para escrever sobre tudo o que
            leio, às vezes levo tempo para digerir a leitura, ou prefiro
            escrever depois de terminar uma coleção fechada. Volte qualquer dia
            desses, talvez tenha algo aqui.
          </p>
        </div>
      </template>
    </div>
  </layout-container>
</template>

<script lang="ts" setup>
const route = useRoute();
const pathImgCovers = PATH_IMG_COVERS;

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("leituras").path(route.path).first();
});

const artistsFormatted = computed(() => {
  const artists = page.value?.artists;

  if (!artists) return null;

  if (artists.length === 1) return `${artists}`;

  return (
    artists?.slice(0, artists.length - 1).join(", ") + " e " + artists.at(-1)
  );
});

const dateFormatted = computed(() => {
  return formatDate(page.value?.date || "");
});

useSeoMeta({
  title: `${page.value?.title ? `${page.value?.title} |` : ""} Página Nove`,
});

const { data: notas } = await useAsyncData(
  "navigation-notes-list-related",
  () => {
    return queryCollectionNavigation(
      "notas",
      queriesCollections.notasAsRelated
    ).order("dateNote", "DESC");
  }
);

const relatedNotes = computed(() => {
  if (!notas.value?.[0]?.children?.length) {
    return null;
  }

  return notas.value[0].children.filter(
    (item) => item.collection === page.value?.collection
  ) as NotesAsItem[];
});
</script>

<style lang="scss" scoped>
.empty-text {
  font-size: 1rem;
  text-wrap: balance;

  strong {
    font-size: 1.125rem;
  }

  &:has(strong) {
    &:not(:last-child) {
      margin-block-end: 8px;
    }
  }
}

.layout-section {
  &[data-ui-content="empty"] {
    padding-block: 32px;
    padding-inline: 32px;
    border-radius: 16px;
    text-align: center;
    background: var(--color-grey-light-100);

    .title {
      --title: 1.75rem;

      @include container-desktop {
        --title: 2.25rem;
      }
    }
  }
}

.layout-grid {
  --pattern-height: 320px;
  display: grid;
  grid-template-areas: "pattern";

  @include container-desktop {
    --pattern-height: 480px;
  }
}

.layout-page {
  grid-area: pattern;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  gap: 32px 0px;
  z-index: 1;

  @include container-desktop {
    gap: 64px 0px;
  }
}

.layout-pattern {
  grid-area: pattern;
  width: 100%;
  height: var(--pattern-height);
  border-radius: 16px;
  margin-inline: auto;
  background: var(--color-purple-100);
  overflow: hidden;
  z-index: 0;

  @include container-desktop {
    height: var(--pattern-height);
  }

  img {
    width: 100%;
    opacity: 0.25;
  }
}
</style>
