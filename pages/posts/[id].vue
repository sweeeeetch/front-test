<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import type { IPost, IPostDetails } from "~/types";

const post = ref<IPostDetails>({} as any);
const route = useRoute();

const isLoading = ref(true);

const fetchPost = async () => {
  try {
    const response = await $fetch<IPostDetails>(
      `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${route.params.id}`,
    );
    post.value = response;
  } catch (e) {
    console.log(e);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchPost();
});
</script>

<template>
  <div>
    <template v-if="post.id && !isLoading">
      <h1 class="mb-[78px] text-[84px]">{{ post.title }}</h1>

      <div class="mb-20">
        <img
          :src="post.image"
          alt="Image"
          class="max-h-[700px] w-full object-cover"
        />
      </div>

      <div class="w-[60%]">
        <h2 class="mb-4 text-base">About</h2>
        <p class="text-[36px]">{{ post.description }}</p>
      </div>
    </template>

    <template v-else-if="isLoading">
      <h1 class="text-[84px]">Loading...</h1>
    </template>

    <template v-else>
      <h1 class="text-[84px]">Post not found</h1>

      <nuxt-link to="/" class="underline">Go back</nuxt-link>
    </template>
  </div>
</template>
