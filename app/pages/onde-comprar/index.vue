<template>
  <section>
    <layout-container>
      <title-page>
        <custom-icon aria-hidden="true" name="shopping-bag" /> Onde Comprar
      </title-page>
      <p class="page-text">
        Se você está por <strong>São Paulo</strong> e quer apoiar lojas de
        quadrinhos da região? Aqui fica a recomendação de onde comprar!
      </p>

      <div>
        <comic-store
          v-for="store in stores"
          :key="store.title"
          :address="store.address"
          :image-url="`/lojas/${store.imageUrl}`"
          :instagram="store.instagram"
          :site-url="store.siteUrl"
          :title="store.title"
        />
      </div>
    </layout-container>
  </section>
</template>

<script lang="ts" setup>
const stores = [
  {
    address: {
      link: "https://maps.app.goo.gl/gmN6YRBroyq5jHy56",
      text: "Praça Benedito Calixto, 158 - 1º andar - Pinheiros, São Paulo - SP, 05406-040",
    },
    imageUrl: "monstra.webp",
    instagram: {
      link: "https://www.instagram.com/lojamonstra/",
      text: "@lojamonstra",
    },
    siteUrl: "https://lojamonstra.com.br/",
    title: "Loja Monstra",
  },
  {
    address: {
      link: "https://maps.app.goo.gl/4VKBfjpaYxg85tZYA",
      text: "R. Coelho Lisboa, 366 - Tatuapé, São Paulo - SP, 03323-040",
    },
    imageUrl: "comicboom.webp",
    instagram: {
      link: "https://www.instagram.com/comic_boom_/",
      text: "@comic_boom_",
    },
    siteUrl: "https://comicboom.com.br/",
    title: "Comic boom!",
  },
  {
    address: {
      link: "https://maps.app.goo.gl/pvoqRDo4EtXzPSkx7",
      text: "R. da Consolação, 2685 - Cerqueira César, São Paulo - SP, 01416-001",
    },
    imageUrl: "comix.webp",
    instagram: {
      link: "https://www.instagram.com/comixbookshop/",
      text: "@comixbookshop",
    },
    siteUrl: "https://www.comix.com.br/",
    title: "Comix Book Shop",
  },
];
</script>

<style lang="scss" scoped>
.page-text {
  font-size: clamp(1rem, 3vw, 1.125rem);

  &:not(:last-child) {
    margin-block-end: 72px;
  }
}
</style>
