import course from "~/server/courseData";
import { IChapter, ICourse } from "~/types/course";

course as unknown as ICourse;

export default defineEventHandler((event) => {
  const { chapterSlug, lessonSlug } = event.context.params;

  // validate chapter
  const chapter = course.chapters.find((chapter) => {
    return chapter.slug === chapterSlug;
  });

  if (!chapter) {
    throw createError({
      statusCode: 404,
      message: "Chapter not found",
    });
  }

  // validate lesson
  const lesson = chapter.lessons.find((lesson) => {
    return lesson.slug === lessonSlug;
  });
  if (!lesson) {
    throw createError({
      statusCode: 404,
      message: "Lesson not found",
    });
  }

  return {
    ...lesson,
    path: `/course/chapter/${chapterSlug}/lesson/${lessonSlug}`,
  };
});
