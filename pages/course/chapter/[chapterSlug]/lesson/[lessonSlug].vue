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
          :model-value="isLessonCompleted"
          @update:model-value="throw createError('Ups der skete en fejl');"
        />
      </client-only>
    </div>
  </div>
</template>

<script setup>
const course = useCourse();
const route = useRoute();

// validate page (404)
definePageMeta({
  validate({ params }) {
    const course = useCourse();

    // validate chapter
    const chapter = course.chapters.find((chapter) => {
      chapter.slug === params.chapterSlug;
    });

    if (!chapter) {
      return createError({
        statusCode: 404,
        message: "Chapter not found",
      });
    }

    // validate lesson
    const lesson = chapter.lessons.find((lesson) => {
      lesson.slug === params.lessonSlug;
    });
    if (!lesson) {
      return createError({
        statusCode: 404,
        message: "Chapter not found",
      });
    }
    return true;
  },
});

if (route.params.lessonSlug === "3-typing-component-events") {
  console.log(
    "my error",
    route.params.paransdbndknsjdfbdkjsf.capitalizeIsNotAMethod()
  );
}

const chapter = computed(() => {
  return course.chapters.find(
    (chapter) => chapter.slug === route.params.chapterSlug
  );
});

const lesson = computed(() => {
  return chapter.value.lessons.find(
    (lesson) => lesson.slug === route.params.lessonSlug
  );
});

// meta data
const title = computed(() => {
  return `${lesson.value.title} - ${course.title}`;
});
useHead({
  title,
});

// button completed
const progress = useLocalStorage("progress", []);

// check if lesson is completed
const isLessonCompleted = computed(() => {
  // if chapter not exist
  if (!progress.value[chapter.value.number - 1]) {
    return false;
  }

  // if lesson not exist
  if (!progress.value[chapter.value.number - 1][lesson.value.number - 1]) {
    return false;
  }

  // return the progress value (we now it exist)
  return progress.value[chapter.value.number - 1][lesson.value.number - 1];
});

// handle the completion toggle
const toggleCompleted = () => {
  // check if chapter exist, if not, add new empty arr
  if (!progress.value[chapter.value.number - 1]) {
    progress.value[chapter.value.number - 1] = [];
  }

  // then set the value to the arr
  progress.value[chapter.value.number - 1][lesson.value.number - 1] =
    !isLessonCompleted.value;
};
</script>
