<script setup lang="ts">
import { Images, MessageCircle, Sparkles } from '@lucide/vue'
</script>

<template>
  <section class="bg-cream py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <p class="font-body text-xs uppercase tracking-[0.28em] text-rose-deep sm:text-sm">
          Simples assim
        </p>

        <h2 class="mt-4 font-display text-5xl text-mocha sm:text-6xl">
          Como funciona
        </h2>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <article class="rounded-[2rem] border border-blush bg-cream-deep p-8">
          <span class="font-body text-sm text-rose-deep">01</span>

          <Sparkles class="mt-6 text-rose-deep" :size="30" />

          <h3 class="mt-6 font-display text-3xl text-mocha">
            Escolha o serviço
          </h3>
        </article>

        <article class="rounded-[2rem] border border-blush bg-cream-deep p-8">
          <span class="font-body text-sm text-rose-deep">02</span>

          <Images class="mt-6 text-rose-deep" :size="30" />

          <h3 class="mt-6 font-display text-3xl text-mocha">
            Veja os modelos na galeria
          </h3>
        </article>

        <article class="rounded-[2rem] border border-blush bg-cream-deep p-8">
          <span class="font-body text-sm text-rose-deep">03</span>

          <MessageCircle class="mt-6 text-rose-deep" :size="30" />

          <h3 class="mt-6 font-display text-3xl text-mocha">
            Chame no WhatsApp para combinar data e horário
          </h3>
        </article>
      </div>
    </div>
  </section>
</template>