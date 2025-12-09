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

        <dialog-drawer
          :id="navDialogId"
          class="nav-dialog"
          :on-click-close="() => dialog?.close()"
          title="Umas outras páginas"
        >
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
        </dialog-drawer>
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
  padding-block: 16px 0px;
  padding-inline: 16px;
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
  padding-inline: 24px;
  border-radius: 24px;
  background: var(--color-grey-light-50);

  @include container-desktop {
    padding-block: 24px;
    padding-inline: 32px;
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

.nav-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;
  padding-inline-start: 0;

  @include container-desktop {
    flex-direction: row;
    gap: 32px;
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
    gap: 6px;
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
