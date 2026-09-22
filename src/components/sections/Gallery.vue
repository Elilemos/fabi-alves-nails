<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const modelImages = [
  '/imagens/bia.jpeg',
  '/imagens/camilly.jpeg',
  '/imagens/camilly1.jpeg',
  '/imagens/carol.jpeg',
  '/imagens/carol1.jpeg',
  '/imagens/carol2.jpeg',
  '/imagens/carol3.jpeg',
  '/imagens/carolpé.jpeg',
  '/imagens/gislane.jpeg',
  '/imagens/islania.jpeg',
  '/imagens/islaniaPé.jpeg',
  '/imagens/janaina.jpeg',
  '/imagens/janainapé.jpeg',
  '/imagens/lara.jpeg',
  '/imagens/lara1.jpeg',
  '/imagens/mikelly.jpeg',
  '/imagens/mikelly1.jpeg',
  '/imagens/mikelly2.jpeg',
  '/imagens/mikelly3.jpeg',
  '/imagens/samara.jpeg',
]

const carouselImages = [...modelImages, ...modelImages]

const carouselViewport = ref<HTMLElement | null>(null)
const currentIndex = ref(0)
const itemsPerView = ref(3)
const viewportWidth = ref(0)
const isTransitionEnabled = ref(true)

const gap = 16

let carouselTimer: number | undefined
let resizeObserver: ResizeObserver | undefined

const slideWidth = computed(() => {
  const totalGaps = gap * (itemsPerView.value - 1)

  return (viewportWidth.value - totalGaps) / itemsPerView.value
})

const trackStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * (slideWidth.value + gap)}px)`,
  transition: isTransitionEnabled.value
    ? 'transform 1000ms ease-in-out'
    : 'none',
}))

function updateCarouselLayout() {
  if (!carouselViewport.value) {
    return
  }

  viewportWidth.value = carouselViewport.value.clientWidth

  if (window.innerWidth < 768) {
    itemsPerView.value = 1
    return
  }

  if (window.innerWidth < 1024) {
    itemsPerView.value = 2
    return
  }

  itemsPerView.value = 3
}

function nextSlide() {
  currentIndex.value += 1
}

function resetLoop() {
  if (currentIndex.value === modelImages.length) {
    isTransitionEnabled.value = false
    currentIndex.value = 0

    requestAnimationFrame(() => {
      isTransitionEnabled.value = true
    })
  }
}

function startCarousel() {
  stopCarousel()
  carouselTimer = window.setInterval(nextSlide, 1500)
}

function stopCarousel() {
  if (carouselTimer !== undefined) {
    window.clearInterval(carouselTimer)
    carouselTimer = undefined
  }
}

onMounted(() => {
  updateCarouselLayout()

  if (carouselViewport.value) {
    resizeObserver = new ResizeObserver(updateCarouselLayout)
    resizeObserver.observe(carouselViewport.value)
  }

  startCarousel()
})

onBeforeUnmount(() => {
  stopCarousel()
  resizeObserver?.disconnect()
})
</script>

<template>
  <section id="galeria" class="overflow-hidden bg-cream-deep py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <p class="font-body text-xs uppercase tracking-[0.28em] text-rose-deep sm:text-sm">
          Inspirações
        </p>

        <h2 class="mt-4 font-display text-5xl text-mocha sm:text-6xl">
          Galeria de modelos
        </h2>
      </div>

      <div
        ref="carouselViewport"
        class="mt-12 overflow-hidden"
        @mouseenter="stopCarousel"
        @mouseleave="startCarousel"
      >
        <div
          class="flex gap-4"
          :style="trackStyle"
          @transitionend="resetLoop"
        >
          <figure
            v-for="(image, index) in carouselImages"
            :key="`${image}-${index}`"
            class="h-[500px] shrink-0 overflow-hidden rounded-[2rem] bg-blush shadow-[0_12px_35px_rgba(74,52,44,0.08)] md:h-96 lg:h-[430px]"
            :style="{ width: `${slideWidth}px` }"
          >
            <img
              :src="image"
              alt="Modelo de unha realizado pela Fabi Alves"
              class="h-full w-full object-contain bg-blush md:object-cover"
              loading="lazy"
            />
          </figure>
        </div>
      </div>

      
    </div>
  </section>
</template>