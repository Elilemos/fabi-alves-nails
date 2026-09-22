<script setup lang="ts">
import { AtSign, House, MapPin, MessageCircle } from '@lucide/vue'

const whatsappUrl = 'https://wa.me/558591084133'

const instagramUrl = 'https://www.instagram.com/fabialves.nails/'
</script>

<template>
  <section id="contato" class="bg-cream-deep py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">

      <!-- TÍTULO -->
      <div class="mx-auto max-w-2xl text-center">
        <p class="font-body text-xs uppercase tracking-[0.28em] text-rose-deep sm:text-sm">
          Contato
        </p>

        <h2 class="mt-4 font-display text-5xl text-mocha sm:text-6xl">
          Vamos conversar?
        </h2>
      </div>

      <!-- MAPA + INFORMAÇÕES -->
      <div class="mt-12 grid gap-6 md:grid-cols-2">

        <!-- MAPA -->
        <div class="overflow-hidden rounded-[2rem] border border-blush bg-white shadow-sm">
          <iframe
            title="Localização da Fabi Alves Nails Designer"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.589938452588!2d-38.666461399999996!3d-3.6803824999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c0cb0006db90f9%3A0x1ba5ecbc662e0fd5!2sBosque%20do%20Sol%20Residence!5e0!3m2!1spt-BR!2sbr!4v1790097216856!5m2!1spt-BR!2sbr"
            class="h-[360px] w-full border-0 sm:h-[420px] lg:h-full lg:min-h-[460px]"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          ></iframe>
        </div>

        <!-- CARDS -->
        <div class="grid gap-6">

          <article class="rounded-[2rem] border border-blush bg-cream p-8">
            <MapPin class="text-rose-deep" :size="30" />

            <h3 class="mt-6 font-display text-3xl text-mocha">
              Atendimento em espaço próprio
            </h3>

            <p class="mt-4 font-body leading-7 text-taupe">
              Atendimento em Caucaia. O endereço completo é enviado pelo WhatsApp
              após o primeiro contato.
            </p>
          </article>

          <article class="rounded-[2rem] border border-blush bg-cream p-8">
            <House class="text-rose-deep" :size="30" />

            <h3 class="mt-6 font-display text-3xl text-mocha">
              Atendimento a domicílio
            </h3>

            <p class="mt-4 font-body leading-7 text-taupe">
              Atendimento em Caucaia e Barra do Ceará, mediante taxa de deslocamento.
            </p>
          </article>

        </div>
      </div>

      <!-- BOTÕES -->
      <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

        <a
          :href="whatsappUrl"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center justify-center gap-2 rounded-full bg-mocha px-7 py-3.5 font-body text-sm font-medium text-cream transition hover:bg-rose-deep"
        >
          <MessageCircle :size="18" />
          Agendar
        </a>

        <a
          :href="instagramUrl"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center justify-center gap-2 rounded-full border border-mocha px-7 py-3.5 font-body text-sm font-medium text-mocha transition hover:bg-blush"
        >
          <AtSign :size="18" />
          Instagram
        </a>

      </div>

    </div>
  </section>
</template>