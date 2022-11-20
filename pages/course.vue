<template>
  <main class="min-h-screen w-full bg-gray-100">
    <div class="ml-auto mr-auto max-w-screen-lg">
      <div class="pt-12 flex items-center flex-col w-full">
        <div class="prose mb-12">
          <h1>course:</h1>
        </div>
      </div>
      <div class="flex flex-row space-x-9 flex-grow">
        <aside class="bg-white w-3/12 p-5">
          <ul>
            <li
              v-for="(chapter, i) in chapters"
              :key="i"
              class="space-y-1 mb-4 flex flex-col"
            >
              {{ chapter.title }}

              <ul class="ml-7">
                <li v-for="(lesson, e) in chapter.lessons" :key="e">
                  <NuxtLink
                    :to="lesson.path"
                    :class="lesson.path === $route.fullPath && 'text-blue-500'"
                  >
                    {{ lesson.title }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </aside>
        <section class="prose bg-white w-full p-5">
          <NuxtPage />
        </section>
      </div>
    </div>
  </main>
</template>

<script setup>
const { chapters } = useCourse();
</script>
