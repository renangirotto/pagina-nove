<template>
  <section>
    <layout-container>
      <title-page>
        <custom-icon aria-hidden="true" name="pen-tool" /> Últimas Notas
      </title-page>

      <grid-notes page="home">
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
    <layout-container divider>
      <title-page custom-tag="h2">
        <custom-icon aria-hidden="true" name="open-book" /> Últimas leituras
      </title-page>

      <grid-read v-if="readingList?.lastReadList">
        <card-read
          v-for="item in readingList.lastReadList"
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
    <layout-container>
      <BoxText variant="purple">
        <title-page custom-tag="h2">
          <custom-icon aria-hidden="true" name="info" /> Números do blog
        </title-page>
        <text-page>
          Porque números grandes (não tão grandes) parecem impactantes. Mas
          desde o começo deste projeto eu li por volta de umas
          <span data-ui-text-big data-ui-text-highlight>{{
            readingList?.totalAmoutOfPages
          }}</span>
          <strong data-ui-text-highlight> páginas</strong>, em
          <span data-ui-text-big data-ui-text-highlight>{{
            readingList?.totalAmountOfReads
          }}</span>
          <strong data-ui-text-highlight> quadrinhos</strong>,
          <strong data-ui-text-highlight>mangas</strong> e talvez uns
          <strong data-ui-text-highlight>livros</strong>, de
          <span data-ui-text-big data-ui-text-highlight>{{
            readingList?.totalAmountOfPublishers
          }}</span>
          <strong data-ui-text-highlight> editoras</strong> diferentes e por
          volta de uns
          <span data-ui-text-big data-ui-text-highlight
            >{{ readingList?.percentageOfReads }}%</span
          >
          de tudo que tenho na estante de casa para ler e para reler também,
          porque algumas coisas li há muito tempo e por isso não coloquei ainda
          aqui no blog.
        </text-page>
      </BoxText>
    </layout-container>
    <layout-container>
      <BoxText>
        <title-page custom-tag="h2">
          <custom-icon aria-hidden="true" name="help-question" /> Sobre este
          blog
        </title-page>
        <text-page>
          Eu vejo este blog como um diário de leitura, uma forma de eu catalogar
          o que li e talvez compartilhar com amigos.
        </text-page>
        <text-page>
          Com certeza ele é um amontoado de textos que eu não espero que alguém
          leia, não porque eu não vou compartilhar as coisas que posto aqui, mas
          porque o intuito não é que outros leiam, afinal porque leriam?
        </text-page>
        <text-page>
          Eu não escrevo bem, não sou jornalista, não sou critico e nem tenho
          formação em nada que me capacite para escrever sobre qualquer coisa
          aqui. Eu leio quadrinhos a mais de 10 anos e sempre senti a vontade de
          extrair o ânimo, o prazer ou o desgosto ao ler um quadrinho, e
          gostando ou não, o meu círculo social mais próximo não tem esse mesmo
          interesse, nunca teve, na verdade.
        </text-page>
        <text-page>
          Minha esposa sempre apoiou meu passatempo, meu gosto pela arte e
          narrativa dos quadrinhos, e ela até lê alguns poucos que recomendo ou
          dou de presente, mas tirando ela o máximo que meus amigos leem são
          alguns poucos mangas online. Por isso desde quando comprei meus
          primeiros quadrinho como adulto trabalhador a alguns bons anos atrás,
          que foram
          <strong>Monstro do Pântano</strong> e <strong>Fábulas</strong>, a
          ideia de começar a escrever só para "desabafar sobre o incrível" veio.
        </text-page>
        <text-page>
          De qualquer forma, eu me sinto contente que esse projeto saiu das
          notas mentais e se tornou algo que não sei por quanto tempo vai durar,
          mas que foi e é divertido de desenvolver e manter, até não ser mais.
        </text-page>
      </BoxText>
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

  const lastReadList = children.slice(0, 4).map((item) => {
    return {
      ...item,
      seriesType: getSetiesType(item.collection as string | undefined),
    };
  });

  const totalAmoutOfPages = children.reduce((acc, cur) => {
    return acc + cur.pages;
  }, 0);

  const publishersList = children.reduce<string[]>((acc, cur) => {
    if (acc.includes(cur.publisher)) return acc;

    acc.push(cur.publisher);
    return acc;
  }, []);

  return {
    lastReadList,
    percentageOfReads: Math.round(
      (children.length * 100) / TOTAL_AMOUNT_ON_SHELF
    ),
    totalAmoutOfPages: totalAmoutOfPages.toLocaleString("pt-BR"),
    totalAmountOfPublishers: publishersList.length,
    totalAmountOfReads: children.length,
  };
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
