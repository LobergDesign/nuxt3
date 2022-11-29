<template>
  <div class="prose w-full max-w-2xl h9">
    <h1>Log in to {{ title }}</h1>
    <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded">
      Login with GitHub
    </button>
  </div>
</template>

<script setup>
const { title } = useCourse();
</script>
