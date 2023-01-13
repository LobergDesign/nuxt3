<template>
  <main>
    <div class="prose ml-auto mr-auto max-w-screen-lg">
      <div class="pt-12 flex justify-between items-center w-full">
        <div class="prose mb-12">
          <h1>{{ title }}</h1>
        </div>
        <div>
          <UserCard />
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
          <NuxtErrorBoundary>
            <NuxtPage />
            <template #error="{ error }">
              <p>
                Oh no, something is not right here
                <code>
                  {{ error }}
                </code>
              </p>
              <button type="button" @click="resetError(error)">reset</button>
            </template>
          </NuxtErrorBoundary>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup>
const { chapters, title } = useCourse();
definePageMeta({
  layout: "alternative-layout",
});
const resetError = async (error) => {
  throw createError({
    fatal: true,
    message: "FATAL!",
  });
};
</script>
