<template>
  <nuxt-icon
    class="custom-icon"
    :class="customClass"
    :data-ui-dynamic="isDynamic"
    :name="name"
    filled
  />
</template>

<script lang="ts" setup>
defineProps<{
  customClass?: string;
  isDynamic?: boolean;
  name: string;
}>();
</script>

<style lang="scss">
.custom-icon {
  &[data-ui-dynamic="true"] {
    svg {
      width: 100% !important;
      max-width: var(--icon-size, 24px) !important;
      height: auto;
    }
  }
}

.nuxt-icon {
  &[data-ui-dynamic="true"] {
    svg {
      min-width: 0px;
      width: 100% !important;
      max-width: var(--icon-size, 24px) !important;
      height: auto !important;
    }
  }

  svg {
    min-width: var(--icon-size, 24px);
    width: var(--icon-size, 24px) !important;
    height: var(--icon-size, 24px) !important;
    margin-bottom: 0 !important;

    #path-light {
      fill: var(--icon-color-light, var(--color-purple-100));
    }

    #path-dark {
      fill: var(--icon-color-dark, var(--color-purple-200));
    }
  }
}
</style>
