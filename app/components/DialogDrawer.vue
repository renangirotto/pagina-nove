<template>
  <dialog :id="id" class="dialog-drawer">
    <div class="dialog-drawer-body">
      <header class="dialog-drawer-header">
        <p class="dialog-drawer-title">{{ title }}</p>
        <button class="dialog-drawer-close" @click="() => onClickClose()">
          <custom-icon aria-hidden="true" name="delete-1" />
        </button>
      </header>
      <slot />
    </div>
  </dialog>
</template>

<script lang="ts" setup>
defineProps<{
  id: string;
  onClickClose: () => void;
  title: string;
}>();
</script>

<style>
.dialog-drawer {
  --open: 0;
  --closed: calc(1 - var(--open));
  width: 100%;
  max-width: none;
  height: 100dvh;
  max-height: 100dvh;
  border: none;
  padding-block: 0px;
  padding-inline: 0px;
  inset: 0;
  background: transparent;
  transform: translateX(calc(var(--closed) * 50%));

  &[open] {
    --open: 1;
    display: block;
  }

  &,
  &::backdrop {
    --duration: calc((var(--open) * 0.25s) + (var(--closed) * 0.25s));

    transition: all var(--duration) ease-in-out allow-discrete;
    opacity: var(--open);
  }

  @starting-style {
    --open: 1;

    &[open] {
      --open: 0;
    }
  }
}

.dialog-drawer-body {
  display: flex;
  flex-direction: column;
  gap: 44px;
  max-width: 380px;
  height: 100%;
  max-height: 100%;
  padding-block: 0px 24px;
  padding-inline: 24px;
  position: relative;
  border: none;
  margin-inline-start: auto;
  background: var(--color-yellow-grey-100);
}

.dialog-drawer-close {
  --icon-color-light: var(--color-purple-200);
  cursor: pointer;
  padding-block: 12px;
  padding-inline: 12px;
  border: none;
  border-radius: 50%;
  background: var(--color-purple-100);
}

.dialog-drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 32px;
  border-block-end: 1px solid var(--color-grey-light-200);
  position: relative;
}

.dialog-drawer-title {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-grey-light-200);
}
</style>
