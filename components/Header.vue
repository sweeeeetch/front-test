<script setup lang="ts"></script>

<template>
  <header class="flex items-center justify-between px-10 pt-12">
    <nuxt-link to="/">
      <img src="~/assets/icons/logo.svg" alt="" />
    </nuxt-link>

    <div class="flex items-center gap-[92px]">
      <nav class="space-x-6">
        <nuxt-link to="/" class="text-black hover:text-gray-500"
          >Works</nuxt-link
        >
        <nuxt-link to="/" class="text-black hover:text-gray-500"
          >About</nuxt-link
        >
      </nav>
      <div class="flex items-center gap-4">
        <button
          class="flex h-[52px] w-[52px] items-center justify-center rounded-full border-2 border-gray-300"
        >
          <img
            src="~/assets/icons/flag.svg"
            alt="UK Flag"
            class="h-6 w-6 rounded-full"
          />
        </button>

        <button
          class="rounded-full bg-black px-4 py-2 text-white transition duration-300 hover:bg-gray-700"
        >
          Let’s work
        </button>
      </div>
    </div>
  </header>
</template>
