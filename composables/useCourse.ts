import { ICourseMeta } from "~/types/meta";
export default async () => useFetchWithCache<ICourseMeta>("/api/course/meta");
