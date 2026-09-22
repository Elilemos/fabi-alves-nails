<script setup lang="ts">

// TODO: substituir pelo link real do Instagram da Fabi.
const instagramUrl = 'https://www.instagram.com/fabialves.nails/'
</script>

<template>
  <footer class="bg-mocha py-12 text-cream">
    <div class="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 text-center lg:flex-row lg:justify-between lg:px-8 lg:text-left">
      <a href="#inicio" class="flex items-center gap-3">
        <span class="font-display text-3xl font-semibold leading-none text-gold">
          FA
        </span>

        <span class="border-l border-cream/25 pl-3">
          <span class="block font-display text-lg leading-none">
            Fabi Alves
          </span>

          <span class="mt-1 block font-body text-[10px] uppercase tracking-[0.2em] text-cream/65">
            Nail Designer
          </span>
        </span>
      </a>

      <a
        :href="instagramUrl"
        target="_blank"
        rel="noreferrer"
        class="inline-flex rounded-full p-3 text-gold transition hover:bg-cream/10"
        aria-label="Instagram da Fabi Alves"
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-5 w-5"
            aria-hidden="true"
        >
            <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
            <circle cx="12" cy="12" r="4.25" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
        </a>

      <p class="font-body text-sm text-cream/65">
        Criado por Elionai Lemos Desenvolvimento Web.
      </p>
    </div>
  </footer>
</template>