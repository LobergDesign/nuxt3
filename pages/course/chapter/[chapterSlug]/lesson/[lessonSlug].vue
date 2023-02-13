<template>
  <div>
    <p class="uppercase text-slate-400 mb-4">
      Lesson: {{ chapter.number }} - {{ lesson.number }}
    </p>
    <h2 class="my-0">{{ lesson.title }}</h2>
    <a v-if="lesson.sourceUrl" :href="lesson.sourceUrl">Download Source code</a>
    <a v-else :href="lesson.downloadUrl">Download video</a>
    <video-player v-if="lesson.videoId" :videoId="lesson.videoId" />
    <p>{{ lesson.text }}</p>
    <div class="mt-8">
      <client-only>
        <lesson-completed-button
          :model-value="isCompleted"
          @update:model-value="toggleCompleted"
        />
      </client-only>
    </div>
  </div>
</template>

<script setup>
import { courseProgeess } from "~/stores/courseProgress";
const course = await useCourse();
const route = useRoute();

const { chapterSlug, lessonSlug } = route.params;
const lesson = await useLesson(chapterSlug, lessonSlug);

const store = courseProgeess();
const { initialize, toggleComplete } = store;
initialize();

// validate page (404)
definePageMeta({
  middleware: [
    // validate dynamic paths
    async function ({ params }, _from) {
      const course = await useCourse();
      // validate chapter
      const chapter = course.value.chapters.find((chapter) => {
        return chapter.slug === params.chapterSlug;
      });

      if (!chapter) {
        return abortNavigation(
          createError({
            statusCode: 404,
            message: "Chapter not found",
          })
        );
      }

      // validate lesson
      const lesson = chapter.lessons.find((lesson) => {
        return lesson.slug === params.lessonSlug;
      });
      if (!lesson) {
        return abortNavigation(
          createError({
            statusCode: 404,
            message: "Lesson not found",
          })
        );
      }
    },
    "auth",
  ],
});

// check if the current lesson is compledted
const isCompleted = computed(() => {
  return store.progress?.[chapterSlug]?.[lessonSlug] || 0;
});

const chapter = computed(() => {
  return course.value.chapters.find(
    (chapter) => chapter.slug === route.params.chapterSlug
  );
});

// meta data
const title = computed(() => {
  return `${lesson.value.title} - ${course.value.title}`;
});
useHead({
  title,
});
</script>
