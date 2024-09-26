<script setup lang="ts">
import type { NuxtError } from "#app";

interface ErrorProps {
  error: NuxtError;
}

const props = defineProps<ErrorProps>();

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <NuxtLayout name="default">
    <div>
      <h1 class="text-[84px]">{{ error.statusCode }}</h1>
      <button @click="handleError" class="underline">Go home</button>
    </div>
  </NuxtLayout>
</template>
