<script setup lang="ts"></script>

<template>
  <footer
    class="relative overflow-hidden bg-ipink p-28 pb-[30px] pt-[8.75rem] text-black"
  >
    <p class="mb-14 text-base">Is there a project?</p>
    <div class="grid grid-cols-2 justify-between">
      <div>
        <h2 class="mt-2 text-[112px] font-bold leading-none underline">
          Let’s work together
        </h2>
      </div>

      <div class="space-y-9 justify-self-center">
        <div>
          <p class="mb-2">For all questions</p>
          <p>+7 (920) 278—00—68</p>
          <p>qtim@agency.com</p>
        </div>

        <div class="space-y-9">
          <div>
            <p class="mb-2">Office in Russia</p>
            <p>139 Ruben Station Lake</p>
            <p>Drew, NM 52678</p>
            <button
              class="mt-2 flex h-8 w-8 items-center justify-center rounded-full bg-black"
            >
              <img src="~/assets/icons/geo.svg" alt="" />
            </button>
          </div>

          <div>
            <p class="mb-2">Office in Dubai</p>
            <p>139 Ruben Station Lake</p>
            <p>Drew, NM 52678</p>
            <button
              class="mt-2 flex h-8 w-8 items-center justify-center rounded-full bg-black"
            >
              <img src="~/assets/icons/geo.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="container mx-auto mt-44 flex flex-col items-center justify-center space-y-4 lg:flex-row lg:justify-between lg:space-y-0"
    >
      <div class="space-x-6">
        <a
          href="#"
          class="underline underline-offset-[6px] transition-all hover:underline-offset-4"
          >Facebook</a
        >
        <a
          href="#"
          class="underline underline-offset-[6px] transition-all hover:underline-offset-4"
          >Instagram</a
        >
        <a
          href="#"
          class="underline underline-offset-[6px] transition-all hover:underline-offset-4"
          >Telegram</a
        >
      </div>

      <div class="space-x-6">
        <a
          href="#"
          class="underline underline-offset-[6px] transition-all hover:underline-offset-4"
          >Behance</a
        >
        <a
          href="#"
          class="underline underline-offset-[6px] transition-all hover:underline-offset-4"
          >LinkedIn</a
        >
        <a
          href="#"
          class="underline underline-offset-[6px] transition-all hover:underline-offset-4"
          >Privacy Policy</a
        >
      </div>
    </div>
    <button
      class="absolute bottom-0 left-1/2 mt-6 flex h-[358px] w-[358px] -translate-x-1/2 translate-y-1/2 transform items-center justify-center rounded-full bg-black text-lg font-semibold text-white transition-all hover:h-[374px] hover:w-[374px] lg:mt-0"
    >
      <span class="absolute top-[35%] text-[32px]">Go</span>
    </button>
  </footer>
</template>
