import { ILessonWithPath } from "~/types/course";

export default async (chapterSlug: string, lessonSlug: string) =>
  useFetchWithCache<ILessonWithPath>(
    `/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`
  );
