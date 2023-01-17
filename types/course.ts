export interface ILesson {
  title: string;
  slug: string;
  number: number;
  downloadUrl: string;
  videoId: string;
  text: string;
  sourceUrl: string;
}
export interface ILessonWithPath extends ILesson {
  path: string;
}
export type IChapter = {
  title: string;
  slug: string;
  number: number;
  lessons: ILesson[] | ILessonWithPath[];
};
export type ICourse = {
  title: string;
  chapters: IChapter[];
};
