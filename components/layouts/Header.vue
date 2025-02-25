<script setup>
import { Ellipsis, X } from 'lucide-vue-next'
import SwitchTheme from '../SwitchTheme.vue'

const showMenu = ref(false)
const { title } = useAppConfig()
</script>

<template>
  <header class="border-b border-gray-200">
    <nav class="container mx-auto px-4 h-16 flex items-center justify-between">
      <a
        href="/"
        :title="title"
        class="text-xl font-bold text-gray-900 dark:text-gray-100"
      >
        {{ title }}
      </a>

      <div class="flex items-center space-x-4">
        <a
          href="/dashboard"
          :title="`${title} Dashboard`"
          class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
        >
          Dashboard
        </a>
        <SwitchTheme />
      </div>

      <button
        class="md:hidden"
        @click="showMenu = !showMenu"
      >
        <Ellipsis
          v-show="!showMenu"
          class="w-6 h-6"
        />
        <X
          v-show="showMenu"
          class="w-6 h-6"
        />
      </button>

      <!-- Mobile menu -->
      <div
        v-if="showMenu"
        class="absolute top-16 left-0 right-0 bg-background border-b border-gray-200 md:hidden"
      >
        <div class="container mx-auto px-4 py-2">
          <a
            href="/dashboard"
            :title="`${title} Dashboard`"
            class="block py-2 text-gray-700 dark:text-gray-300"
          >
            Dashboard
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>
