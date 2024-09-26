<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import BlogPost from "~/components/BlogPost.vue";
import Pagination from "~/components/Pagination.vue";
import type { IPost } from "~/types";

const postsPerPage = 8;
const posts = ref<IPost[]>([]);
const currentPage = ref(1);
const totalPages = ref(0);
const isLoading = ref(true);

const displayedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage;
  const end = start + postsPerPage;
  return posts.value.slice(start, end);
});

const fetchPosts = async () => {
  try {
    const response = await $fetch<IPost[]>(
      `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts`,
    );

    if (response) {
      posts.value = response;
      totalPages.value = Math.ceil(response.length / postsPerPage);
    }
  } catch (e) {
    console.log(e);
  } finally {
    isLoading.value = false;
  }
};

const handlePageChange = (page: number) => {
  currentPage.value = page;
};

onMounted(() => {
  fetchPosts();
});
</script>

<template>
  <div class="container mx-auto">
    <h1 class="my-6 text-[84px]">Articles</h1>

    <div class="grid grid-cols-4 gap-8">
      <template v-if="!isLoading && posts.length">
        <BlogPost v-for="post in displayedPosts" :key="post.id" :post="post" />
      </template>

      <template v-else-if="isLoading">
        <h2 class="text-[68px]">Loading...</h2>
      </template>

      <template v-else>
        <h2 class="text-[68px]">There are no posts :(</h2>
      </template>
    </div>

    <Pagination
      class="mt-12"
      :currentPage="currentPage"
      :totalPages="totalPages"
      @changePage="handlePageChange"
    />
  </div>
</template>
