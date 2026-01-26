<template>
  <component
    :is="CustomTag"
    class="custom-link"
    :href="props.href"
    :to="props.href"
    :target="props.target"
    :rel="props.target === '_blank' ? 'noopener noreferrer' : undefined"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
const props = defineProps<{
  href: string;
  target: "_self" | "_blank";
}>();

const isExternalLink = (url: string): boolean => {
  return /^(https?:\/\/|mailto:|tel:)/.test(url) || url.startsWith("//");
};

const CustomTag = computed(() => {
  if (props.target === "_blank" || isExternalLink(props.href)) {
    return "a";
  }
  return resolveComponent("NuxtLink");
});
</script>

<style lang="scss" scoped>
.custom-link {
  box-decoration-break: clone;
  padding-inline: 2px;
  border-radius: 4px;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  text-decoration-thickness: 2px;
  color: var(--color-purple-200);
  transition: background 0.25s ease-in-out;

  &:hover {
    background: rgb(from var(--color-purple-200) r g b / 0.25);
  }
}
</style>
