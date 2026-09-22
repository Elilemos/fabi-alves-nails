<script setup lang="ts">
import { computed, ref } from 'vue'
import { services } from '../../data/services'
import type { ServiceCategory } from '../../types/service'

type FilterCategory = 'Todos' | ServiceCategory

const categories: FilterCategory[] = [
  'Todos',
  'Básico',
  'Blindagem',
  'Cuidado dos Pés',
  'Técnicas e Alongamentos',
  'Manutenção/Adicionais',
]

const activeCategory = ref<FilterCategory>('Todos')
const whatsappUrl = 'https://wa.me/558591084133'

const filteredServices = computed(() => {
  if (activeCategory.value === 'Todos') {
    return services
  }

  return services.filter((service) => service.category === activeCategory.value)
})

function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
</script>

<template>
  <section id="servicos" class="bg-cream py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <p class="font-body text-xs uppercase tracking-[0.28em] text-rose-deep sm:text-sm">
          Serviços
        </p>

        <h2 class="mt-4 font-display text-5xl text-mocha sm:text-6xl">
          Cuidado pensado para você.
        </h2>
      </div>

      <div class="mt-10 flex flex-wrap justify-center gap-2">
        <button
          v-for="category in categories"
          :key="category"
          type="button"
          class="rounded-full px-4 py-2 font-body text-sm transition"
          :class="activeCategory === category
            ? 'bg-mocha text-cream'
            : 'bg-cream-deep text-mocha-soft hover:bg-blush'"
          :aria-pressed="activeCategory === category"
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="service in filteredServices"
          :key="service.id"
          class="flex min-h-64 flex-col rounded-[2rem] border border-blush bg-cream-deep p-7 shadow-[0_12px_35px_rgba(74,52,44,0.06)]"
        >
          <p class="font-body text-xs uppercase tracking-[0.18em] text-rose-deep">
            {{ service.category }}
          </p>

          <h3 class="mt-4 font-display text-3xl leading-tight text-mocha">
            {{ service.name }}
          </h3>

          <p class="mt-3 font-body text-sm leading-6 text-taupe">
            {{ service.description }}
          </p>

      <div class="mt-auto pt-7">
        <strong class="font-display text-3xl font-medium text-rose-deep">
          {{ formatCurrency(service.price) }}
        </strong>
      </div>
      </article>
      </div>

      <div class="mt-12 text-center">
        <!-- TODO: no futuro, adicionar animação do botão ScrollX UI aqui -->
        <a
          :href="whatsappUrl"
          target="_blank"
          rel="noreferrer"
          class="inline-flex rounded-full bg-mocha px-7 py-3.5 font-body text-sm font-medium text-cream transition hover:bg-rose-deep"
        >
          Agendar pelo WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>