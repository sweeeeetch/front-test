<script setup lang="ts">
import type { IPost } from "~/types";

interface BlogPostProps {
  post: IPost;
}

const props = defineProps<BlogPostProps>();
</script>

<template>
  <nuxt-link
    :to="`/posts/${post.id}`"
    class="group flex transform flex-col justify-between transition ease-out hover:-translate-y-[20px]"
  >
    <div>
      <img
        class="h-[280px] w-full object-cover"
        :src="post.image"
        :alt="post.title"
      />

      <div class="flex flex-col justify-between pt-4">
        <p class="text-gray-600">{{ post.preview }}</p>
      </div>
    </div>
    <a href="#" class="text-ipink opacity-0 transition group-hover:opacity-100"
      >Read more</a
    >
  </nuxt-link>
</template>
