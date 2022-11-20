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
      <lesson-completed-button
        :model-value="isLessonCompleted"
        @update:model-value="toggleCompleted"
      />
    </div>
  </div>
</template>

<script setup>
const course = useCourse();
const route = useRoute();

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
const progress = useState("progress", () => {
  return [];
});

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
