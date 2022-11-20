<template>
  <iframe
    height="350"
    width="600"
    :src="`https://player.vimeo.com/video/${videoId}`"
    frameborder="0"
  ></iframe>
</template>
<script setup>
const props = defineProps({
  videoId: {
    type: Number,
    default: null,
    required: true,
  },
});
</script>
