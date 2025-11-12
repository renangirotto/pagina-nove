<template>
  <div class="icons">
    <template v-for="n in filledStars" :key="'filled-' + n">
      <custom-icon name="star"></custom-icon>
    </template>

    <custom-icon
      v-if="hasHalfStar"
      custom-class="icon-half"
      name="half-star"
    ></custom-icon>

    <template v-for="n in emptyStars" :key="'empty-' + n">
      <custom-icon custom-class="icon-empty" name="star"></custom-icon>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const MAX_RATING = 5;

const props = defineProps<{ rating: string | number }>();

const ratingAsNumber = computed(() => Number(props.rating));

const filledStars = computed(() => {
  return Math.floor(ratingAsNumber.value);
});

const hasHalfStar = computed(() => {
  const decimalPart = ratingAsNumber.value - filledStars.value;
  return decimalPart >= 0.5 - 1e-6;
});

const emptyStars = computed(() => {
  let count = MAX_RATING;
  count -= filledStars.value;

  if (hasHalfStar.value) {
    count -= 1;
  }

  return count;
});
</script>

<style>
.icons {
  --icon-color-light: var(--rating-color-filled, var(--color-purple-100));
  --icon-size: 28px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.icon-empty {
  --icon-color-light: var(--rating-color-empty, var(--color-grey-light-100));
}

.icon-half {
  --icon-color-dark: var(--rating-color-filled, var(--color-purple-100));
  --icon-color-light: var(--rating-color-empty, var(--color-grey-light-100));
}
</style>
