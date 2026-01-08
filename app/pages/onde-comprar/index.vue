<template>
  <section>
    <layout-container>
      <title-page>
        <custom-icon aria-hidden="true" name="shopping-bag" /> Onde Comprar
      </title-page>
      <text-page>
        Se estiver por <strong>São Paulo</strong> e quiser apoiar lojas de
        quadrinhos, fica aqui a minha recomendação!
      </text-page>

      <div class="layout-stores">
        <comic-store
          v-for="store in stores"
          :key="store.title"
          :address="store.address"
          :image-url="store.imageUrl"
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
    imageUrl: "/images/stores/loja-monstra.webp",
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
    imageUrl: "https://placehold.co/600x400",
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
    imageUrl: "https://placehold.co/600x400",
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
.layout-stores {
  margin-block-start: 32px;

  @include container-desktop {
    margin-block-start: 64px;
  }
}
</style>
