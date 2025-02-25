<script setup>
import { AreaChart } from 'lucide-vue-next'

const { title, description } = useAppConfig()
</script>

<template>
  <main class="flex flex-col items-center justify-center py-12 text-center">
    <h1 class="text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight">
      {{ title }}
    </h1>
    <p class="max-w-xl mt-4 text-lg text-slate-600">
      {{ description }}
    </p>
    <div class="mt-6">
      <HomeLink
        href="/dashboard"
        title="Dashboard"
        class="flex items-center justify-center gap-2 px-6 py-3"
        rel="noopener"
      >
        <AreaChart class="w-5 h-5" />
        Dashboard
      </HomeLink>
    </div>
  </main>
</template>
