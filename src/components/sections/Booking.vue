<script setup lang="ts">
import { MessageCircle } from '@lucide/vue'

const whatsappUrl = 'https://wa.me/558591084133'
</script>

<template>
  <section id="agendamento" class="bg-mocha py-20 sm:py-28">
    <div class="mx-auto max-w-3xl px-6 text-center lg:px-8">
      <MessageCircle
        class="mx-auto text-gold"
        :size="36"
      />

      <p class="mt-6 font-body text-xs uppercase tracking-[0.28em] text-gold sm:text-sm">
        Agendamento
      </p>

      <h2 class="mt-4 font-display text-5xl leading-tight text-cream sm:text-6xl">
        Vamos combinar seu momento de autocuidado?
      </h2>

      <p class="mx-auto mt-6 max-w-xl font-body text-base leading-7 text-cream/75 sm:text-lg">
        Chame no WhatsApp para conversar sobre o serviço, data e horário.
      </p>

      <!-- TODO: no futuro, adicionar animação do botão ScrollX UI aqui -->
      <a
        :href="whatsappUrl"
        target="_blank"
        rel="noreferrer"
        class="mt-9 inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 font-body text-sm font-medium text-mocha transition hover:bg-cream"
      >
        Agendar
      </a>
    </div>
  </section>
</template>