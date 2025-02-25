<script setup>
const { title } = useAppConfig()
</script>

<template>
  <footer class="border-t border-gray-200">
    <div class="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
      <p>&copy; {{ new Date().getFullYear() }} {{ title }}. All rights reserved.</p>
    </div>
  </footer>
</template>
