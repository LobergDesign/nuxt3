<template>
  <main class="min-h-screen w-full bg-gray-100">
    <div class="ml-auto mr-auto max-w-screen-lg">
      <div class="pt-12 flex items-center flex-col w-full">
        <div class="prose mb-12">
          <h1>course:</h1>
        </div>
      </div>
      <div class="flex flex-row space-x-8 flex-grow">
        <aside class="bg-white w-3/12 p-5">
          <p>Im a aside</p>
        </aside>
        <section class="bg-white w-full p-5">
          <NuxtPage />
        </section>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style></style>
