<script setup lang="ts">
import { ref } from 'vue'

const cardStyle = ref({})

function handlePointerMove(event: PointerEvent) {
  const card = event.currentTarget as HTMLElement
  const position = card.getBoundingClientRect()

  const cursorX = (event.clientX - position.left) / position.width - 0.5
  const cursorY = (event.clientY - position.top) / position.height - 0.5

  cardStyle.value = {
    transform: `perspective(1000px) rotateX(${cursorY * -5}deg) rotateY(${cursorX * 5}deg) translateY(-4px)`,
  }
}

function resetCard() {
  cardStyle.value = {
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)',
  }
}
</script>

<template>
  <div
    class="drift-card"
    @pointermove="handlePointerMove"
    @pointerleave="resetCard"
  >
    <div class="drift-card__content" :style="cardStyle">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.drift-card {
  perspective: 1000px;
}

.drift-card__content {
  height: 100%;
  transition: transform 220ms ease-out;
  transform-style: preserve-3d;
}

@media (prefers-reduced-motion: reduce) {
  .drift-card__content {
    transition: none;
  }
}
</style>