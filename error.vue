<template>
  <NuxtLayout>
    <div v-if="error.statusCode === '404'">
      <h1>404</h1>
      <p>
        <code>
          {{ error }}
        </code>
      </p>
      <p>
        {{ error.message }}
      </p>
    </div>
    <div v-else>
      <h1>Server unhandle error</h1>
      <p>
        <code>
          {{ error }}
        </code>
      </p>
      <p>
        {{ error.message }}
      </p>
      <p class="mt-5">
        <a @click="handleError"> Click here to clear error and redirect </a>
      </p>
    </div>
  </NuxtLayout>
</template>

<script setup>
const error = useError();
const handleError = () => {
  clearError({
    redirect:
      "/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3",
  });
};
</script>
