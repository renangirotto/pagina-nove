<template>
  <header class="header">
    <layout-container aria-label="Página inicial" class="header-container">
      <nuxt-link class="header-logo" :to="routes.home">
        <logo-svg />
      </nuxt-link>

      <nav class="nav" data-ui-decive="mobile">
        <button class="nav-button" @click="() => dialog?.showModal()">
          <custom-icon name="menu" />
        </button>

        <dialog :id="navDialogId" class="nav-dialog">
          <div class="nav-dialog-body">
            <ul class="nav-list">
              <li v-for="item in navItems" :key="item.to">
                <nuxt-link
                  class="nav-link"
                  :to="item.to"
                  @click="() => dialog?.close()"
                >
                  <custom-icon aria-hidden="true" :name="item.icon" />
                  {{ item.label }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </dialog>
      </nav>

      <nav class="nav" data-ui-decive="desktop">
        <ul class="nav-list">
          <li v-for="item in navItems" :key="item.to">
            <nuxt-link class="nav-link" :to="item.to">
              <custom-icon aria-hidden="true" :name="item.icon" />
              {{ item.label }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </layout-container>
  </header>
</template>

<script lang="ts" setup>
import { NAV_ITEMS } from "~/utils/constants";

const routes = ROUTES;
const navItems = NAV_ITEMS;
const navDialogId = "nav-dialog";

const dialog = document?.getElementById(
  navDialogId
) as HTMLDialogElement | null;
</script>

<style lang="scss" scoped>
.header {
  padding-inline: 16px;

  &:not(:last-child) {
    .header-container {
      border-block-end: 1px solid var(--color-grey-light-100);
    }
  }
}

.header-container {
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: auto;
  gap: 0px 16px;
  grid-template-areas: "logo nav";
  align-items: center;
  width: 100%;
  padding-block: 16px;

  @include container-desktop {
    padding-block: 24px;
  }
}

.header-logo {
  grid-area: logo;
}

.nav {
  grid-area: nav;
  justify-self: end;
  font-size: 20px;

  &[data-ui-decive="mobile"] {
    @include container-desktop {
      display: none;
    }
  }

  &[data-ui-decive="desktop"] {
    display: none;

    @include container-desktop {
      display: block;
    }
  }
}

.nav-button {
  --icon-size: 24px;
  --icon-size: 24px;
  --icon-color-light: var(--color-grey-dark-100);

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 8px;
  padding-inline: 8px;
  border: none;
  border-radius: 4px;
  background: none;
}

.nav-dialog {
  width: 100%;
  max-width: none;
  height: 100dvh;
  max-height: 100dvh;
  border: none;
  padding-block: 16px;
  padding-inline: 16px;
  inset: 0;
  background: transparent;
}

.nav-dialog-body {
  max-width: 380px;
  height: 100%;
  max-height: 100%;
  padding-block: 24px;
  padding-inline: 24px;
  border-radius: 4px;
  margin-inline-start: auto;
  background: var(--color-yellow-grey-100);
}

.nav-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding-inline-start: 0;

  @include container-desktop {
    flex-direction: row;
  }
}

.nav-link {
  --icon-size: 24px;
  --icon-color-dark: var(--color-grey-light-200);
  --icon-color-light: var(--color-grey-light-100);

  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;

  @include container-desktop {
    --icon-size: 18px;
    font-size: 20px;
    gap: 4px;
  }

  &:hover,
  &:focus-within {
    @include container-desktop {
      --icon-color-dark: var(--color-purple-200);
      --icon-color-light: var(--color-purple-100);
    }
  }

  &.router-link-active {
    --icon-color-dark: var(--color-purple-200);
    --icon-color-light: var(--color-purple-100);
  }
}
</style>
