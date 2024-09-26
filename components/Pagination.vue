<script setup lang="ts">
import { computed } from "vue";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

interface Emit {
  (e: "changePage", page: number): void;
}

const props = defineProps<PaginationProps>();
const emit = defineEmits<Emit>();

const pages = computed(() => {
  return Array.from({ length: props.totalPages }, (_, index) => index + 1);
});

const changePage = (page: number) => {
  if (page >= 1 && page <= props.totalPages) {
    emit("changePage", page);
  }
};
</script>

<template>
  <div class="flex items-center space-x-2">
    <button
      v-for="page in pages"
      :key="page"
      @click="changePage(page)"
      class="h-[44px] w-[44px] rounded-xl bg-gray-100 transition hover:bg-gray-200"
      :class="{ '!bg-black text-white': page === props.currentPage }"
    >
      {{ page }}
    </button>

    <button
      @click="changePage(props.currentPage + 1)"
      :disabled="props.currentPage === props.totalPages"
      class="flex h-[44px] w-[44px] items-center justify-center rounded-xl border border-gray-300 bg-white hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-white"
    >
      <img src="~/assets/icons/arrow.svg" alt="" />
    </button>
  </div>
</template>
