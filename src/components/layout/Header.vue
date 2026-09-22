<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X } from '@lucide/vue'

const isMenuOpen = ref(false)

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Certificações', href: '#certificacoes' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Serviços', href: '#servicos' },  
  { label: 'Agendamento', href: '#agendamento' },
  { label: 'Contato', href: '#contato' },
]

const whatsappUrl = 'https://wa.me/558591084133'

function closeMobileMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-blush/70 bg-cream/85 backdrop-blur-md">
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
      <a
        href="#inicio"
        class="flex items-center gap-3"
        aria-label="Ir para o início"
      >
        <span class="font-display text-3xl font-semibold leading-none text-rose-deep">
          FA
        </span>

        <span class="hidden border-l border-blush pl-3 sm:block">
          <span class="block font-display text-lg leading-none text-mocha">
            Fabi Alves
          </span>
          <span class="mt-1 block font-body text-[10px] uppercase tracking-[0.2em] text-taupe">
            Nail Designer
          </span>
        </span>
      </a>

      <nav class="hidden items-center gap-5 xl:flex" aria-label="Menu principal">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="font-body text-sm text-mocha-soft transition-colors hover:text-rose-deep"
        >
          {{ item.label }}
        </a>
      </nav>

      <!-- TODO: no futuro, adicionar animação do botão ScrollX UI aqui -->
      <a
        :href="whatsappUrl"
        target="_blank"
        rel="noreferrer"
        class="hidden rounded-full bg-mocha px-5 py-3 font-body text-sm font-medium text-cream transition hover:bg-rose-deep xl:inline-flex"
      >
        Agendar
      </a>

      <button
        type="button"
        class="inline-flex rounded-full p-2 text-mocha transition hover:bg-blush xl:hidden"
        :aria-label="isMenuOpen ? 'Fechar menu' : 'Abrir menu'"
        @click="isMenuOpen = !isMenuOpen"
      >
        <X v-if="isMenuOpen" :size="24" />
        <Menu v-else :size="24" />
      </button>
    </div>

    <nav
      v-if="isMenuOpen"
      class="border-t border-blush bg-cream px-6 py-6 xl:hidden"
      aria-label="Menu mobile"
    >
      <div class="flex flex-col gap-4">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="font-body text-base text-mocha-soft transition-colors hover:text-rose-deep"
          @click="closeMobileMenu"
        >
          {{ item.label }}
        </a>

        <!-- TODO: no futuro, adicionar animação do botão ScrollX UI aqui -->
        <a
          :href="whatsappUrl"
          target="_blank"
          rel="noreferrer"
          class="mt-2 inline-flex w-full justify-center rounded-full bg-mocha px-5 py-3 font-body text-sm font-medium text-cream transition hover:bg-rose-deep"
          @click="closeMobileMenu"
        >
          Agendar
        </a>
      </div>
    </nav>
  </header>
</template>