<template>
  <div class="box-spoiler">
    <title-page>Opa! Cuidado a frente</title-page>
    <text-page>
      Escrever notas sobre leituras nem sempre é fácil sem trazer um pouco de
      spoilers com o texto. Por isso queria avisar que desta parte do texto para
      frente poderá haver spoilers de: <strong>{{ spoiler }}</strong
      >. <br /><br />
      Se não quiser que isso impacte sua experiência lendo estes volumes, volte
      depois da sua leitura!
    </text-page>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  spoiler: string;
}>();
</script>

<style lang="scss" scoped>
.box-spoiler {
  --text-page-font-size: 1rem;
  padding-block: 16px 32px;
  padding-inline: 32px;
  border-radius: 8px;
  color: var(--color-purple-200);
  background: var(--color-purple-50);

  &:not(:last-child) {
    margin-block-end: 32px;

    @include container-desktop {
      margin-block-end: 64px;
    }
  }
}
</style>
