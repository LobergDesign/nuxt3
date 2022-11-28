import courseData from "~/composables/courseData";

type ILesson = {
  title: string;
  slug: string;
  number: number;
  downloadUrl: string;
  sourceUrl?: string;
  videoId: string;
  text: string;
  path: string;
};
type IChapter = {
  title: string;
  slug: string;
  number: number;
  lessons: ILesson[];
};

type ICourse = {
  title: string;
  chapters: IChapter[];
};

export const useCourse = (): ICourse => {
  const chapters: IChapter[] = courseData.chapters.map((chapter) => {
    const lessons: ILesson[] = chapter.lessons.map((lesson) => ({
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
