export type OutlineBase = {
  title: string;
  slug: string;
  number: number;
};
export interface OutlineChapter extends OutlineBase {
  lessons: OutlineLessons[];
}
export interface OutlineLessons extends OutlineBase {
  path: string;
}
export interface ICourseMeta {
  title: string;
  chapters: OutlineChapter[];
}
