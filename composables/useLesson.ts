export default async (chapterSlug: string, lessonSlug: string) => {
  // useFetch
  // const { data, error } = await useFetch(
  //   `/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`
  // );

  const { data, error } = await useAsyncData(() =>
    $fetch(`/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`)
  );

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: `could not fetch lesson: ${lessonSlug} in chapter: ${chapterSlug}`,
    });
  }

  return data;
};
