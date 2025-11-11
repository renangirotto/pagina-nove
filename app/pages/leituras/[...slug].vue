<template>
  <layout-container class="grid">
    <template v-if="page">
      <div class="grid-cover">
        <figure class="cover-figure">
          <img
            class="cover-image"
            :src="`${pathImgCovers}/${page.cover}`"
            alt=""
          />
        </figure>
      </div>
      <div class="grid-info">
        <div class="info-rating">
          <rating-bar :rating="page.rating" />
          <span>|</span>
          <p>
            {{
              new Date(page.date).toLocaleDateString("pt-BR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            }}
          </p>
        </div>
        <h2 class="title">{{ page.title }}</h2>
        <div class="info-texts">
          <span>
            por
            <template v-if="artistsFormatted">
              {{ artistsFormatted }}
            </template>
          </span>
          <span>|</span>
          <span>{{ page.pages }} páginas</span>
          <span>|</span>
          <span> Editora {{ page.publisher }} </span>
          <span>|</span>
          <span>Ano {{ page.publishYear }}</span>
        </div>
      </div>

      <template v-if="page.body.value.length">
        <div class="grid-content">
          <ContentRenderer v-if="page" :value="page" />
        </div>
      </template>
      <template v-else>
        <div class="grid-content" data-ui-content="empty">
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
    </template>
  </layout-container>
</template>

<script lang="ts" setup>
import { computed } from "vue";

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

useSeoMeta({
  title: `${page.value?.title} | Página Nove`,
});
</script>

<style lang="scss" scoped>
.cover-figure {
  max-width: 280px;

  @include container-desktop {
    max-width: none;
  }
}

.cover-image {
  width: 100%;
  aspect-ratio: 3 / 4;
  border-radius: 4px;
}

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

.grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  gap: 56px 0px;
  grid-template-areas:
    "cover"
    "info"
    "content";

  @include container-desktop {
    grid-template-columns: 360px 1fr;
    grid-template-rows: repeat(2, auto);
    gap: 64px 44px;
    grid-template-areas:
      "cover info"
      "content content";
  }
}

.grid-content {
  grid-area: content;

  &[data-ui-content="empty"] {
    padding-block: 32px;
    padding-inline: 32px;
    border-radius: 16px;
    text-align: center;
    background: #f8f8f8;

    .title {
      --title: 1.75rem;

      @include container-desktop {
        --title: 2.25rem;
      }
    }
  }
}

.grid-cover {
  grid-area: cover;
  justify-self: center;
}

.grid-info {
  grid-area: info;
  align-content: center;
  text-align: center;

  @include container-desktop {
    text-align: left;
  }
}

.info-rating {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 1.25rem;
  color: #cfcfde;

  @include container-desktop {
    flex-direction: row;
  }

  &:not(:last-child) {
    margin-block-end: 12px;
  }

  span {
    display: none;

    @include container-desktop {
      display: inline-block;
    }
  }
}

.info-texts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 1.125rem;

  @include container-desktop {
    justify-content: flex-start;
    font-size: 1.25rem;
  }
}

.title {
  font-size: var(--title, 2rem);

  @include container-desktop {
    --title: 2.75rem;
  }

  &:not(:last-child) {
    margin-block-end: 16px;
  }
}
</style>
