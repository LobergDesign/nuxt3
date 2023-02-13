import { StorageSerializers } from "@vueuse/core";

export default async <T>(url: string) => {
  // useFetch wrapper around fetch and asyncfetch - use this

  // locale storage cache
  // default value null
  const cached = useSessionStorage<T>(url, null, {
    serializer: StorageSerializers.object,
  });

  if (!cached.value) {
    const { data, error } = await useFetch<T>(url);

    // LAZY option - Lazy call, remove await
    // const { data, error, pending } =  useLazyFetch<LessonWithPath>(url);

    // PICK option - used to pick porpertyes to fetch
    // const { data, error } = await useFetch<LessonWithPath>(url, {
    //   pick: ["title", "number"]
    // });

    if (error.value) {
      throw createError({
        ...error.value,
        statusMessage: `could not fetch from ${url}`,
      });
    }

    cached.value = data.value as T;
  } else {
    console.log(`Getting data from cache for ${url}`);
  }

  return cached;
};
