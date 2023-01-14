import courseData from "~/composables/courseData";
import { IChapter, ICourse } from "~/types/course";

export const useCourse = (): ICourse => {
  const chapters: IChapter[] = courseData.chapters.map((chapter) => {
    const lessons: any = chapter.lessons.map((lesson) => ({
      ...lesson,
      path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
    }));
    return {
      ...chapter,
      lessons,
    };
  });
  return {
    ...courseData,
    chapters,
  };
};
