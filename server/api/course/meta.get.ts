import course from "~/server/courseData";
import { ICourse } from "~/types/course";
import { OutlineLessons, OutlineChapter } from "~/types/meta";

course as unknown as ICourse;

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
