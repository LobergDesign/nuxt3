<template>
  <div class="prose w-full max-w-2xl h9">
    <h1>Log in to {{ title }}</h1>
    <button
      class="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      @click="login"
    >
      Login with GitHub
    </button>
  </div>
</template>

<script setup lang="ts">
const { title } = useCourse();
const { query } = useRoute();
const superbase = useSupabaseClient();
const user = useSupabaseUser();

// watch to se if user is logged in or out
watchEffect(async () => {
  if (user.value) {
    await navigateTo(query.redirectTo as string, {
      replace: true,
    });
  }
});

const login = async () => {
  const redirectTo = `${window.location.origin}${query.redirectTo}`;
  const { error } = await superbase.auth.signInWithOAuth({
    provider: "github",
    options: { redirectTo },
  });
  if (error) {
    console.error("login errir", error);
  }
};
</script>
