import course from "~/server/courseData";
import { IChapter, ICourse } from "~/types/course";

course as unknown as ICourse;

type OutlineBase = {
  title: string;
  slug: string;
  number: number;
};
interface OutlineChapter extends OutlineBase {
  lessons: OutlineLessons[];
}
interface OutlineLessons extends OutlineBase {
  path: string;
}
type ICourseMeta = {
  title: string;
  chapters: OutlineChapter[];
};

export default defineEventHandler((event) => {
  const outline: any = course.chapters.reduce((prev: any, next: any) => {
    const lessons: OutlineLessons[] = next.lessons.map((lesson: any) => ({
      title: lesson.title,
      slug: lesson.slug,
      number: lesson.number,
      path: `/course/chapter/${next.slug}/lesson/${lesson.slug}`,
    }));

    const chapter: OutlineChapter = {
      title: next.title,
      slug: next.slug,
      number: next.number,
      lessons,
    };

    return [...prev, chapter];
  }, []);
  return {
    title: course.title,
    chapters: outline,
  };
});
