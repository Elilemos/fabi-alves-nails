<script setup lang="ts">
import DriftCard from '../ui/DriftCard.vue'

const whatsappUrl = 'https://wa.me/558591084133'
</script>

<template>
  <section
    id="inicio"
    class="overflow-hidden bg-cream pb-16 pt-32 sm:pb-24 sm:pt-40"
  >
    <div class="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
      <div class="order-2 lg:order-1">
        <p class="font-body text-xs uppercase tracking-[0.28em] text-rose-deep sm:text-sm">
          Nail Designer em Caucaia
        </p>

        <h1 class="mt-5 max-w-2xl font-display text-5xl leading-[0.95] text-mocha sm:text-6xl lg:text-7xl">
          Realçando sua beleza através do
          <span class="italic text-rose-deep"> cuidado ♥ </span>
          e da elegância.
        </h1>

        <p class="mt-7 max-w-xl font-body text-base leading-7 text-taupe sm:text-lg">
          Cada atendimento é pensado para proporcionar um momento único de
          autocuidado, utilizando técnicas modernas e materiais de qualidade
          para oferecer unhas bonitas, resistentes e sofisticadas.
        </p>

        <div class="mt-9 flex flex-col gap-3 sm:flex-row">
          <!-- TODO: no futuro, adicionar animação do botão ScrollX UI aqui -->
          <a
            :href="whatsappUrl"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center justify-center rounded-full bg-mocha px-7 py-3.5 font-body text-sm font-medium text-cream transition hover:bg-rose-deep"
          >
            Agendar
          </a>

          <a
            href="#servicos"
            class="inline-flex items-center justify-center rounded-full border border-mocha px-7 py-3.5 font-body text-sm font-medium text-mocha transition hover:bg-blush"
          >
            Conhecer serviços
          </a>
        </div>
      </div>

      <DriftCard class="order-1 h-[430px] w-full lg:order-2 lg:h-[590px]">
        <div class="relative h-full overflow-hidden rounded-[2rem] shadow-[0_24px_60px_rgba(74,52,44,0.16)]">
          <img
            src="/imagens/Fabiana.png"
            alt="Fabi Alves, Nail Designer"
            class="h-full w-full object-cover object-[45%_center]"
          />

          <div class="absolute inset-0 bg-gradient-to-t from-mocha/15 via-transparent to-transparent" />
        </div>
      </DriftCard>
    </div>
  </section>
</template>