<script setup>
import { useHeaderStore } from "~/store/useHeaderStore";
import { storeToRefs } from "pinia";
const header = useHeaderStore();

const { openHeader } = storeToRefs(header);
</script>

<template>
  <div
    :class="openHeader ? 'fixed bg-white' : 'hidden'"
    class="fixed top-0 h-screen z-[40] w-full p-5"
  >
    <div class="flex justify-between items-center">
      <p class="font-semibold">Filter</p>
      <button @click="openHeader = !openHeader" aria-label="close_button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
    </div>
    <div class="mt-8">
      <p class="font-semibold">Search Product</p>
      <input
        type="text"
        placeholder="Search product"
        class="border border-gray-200 text-[#5c6c75] focus:border-green-300 shadow-sm pl-5 w-full rounded-md py-1.5 mt-3 focus:ring-2 focus:ring-green-300 focus:outline-none focus:shadow-lg"
      />
      <div class="flex items-center mt-4">
        <input
          type="checkbox"
          id="checkbox"
          value=""
          class="appearance-none w-4 h-4 text-blue-600 rounded focus:ring-green-400 ring-offset-gray-800 focus:ring-2 bg-white border border-gray-300 checked:bg-[#0aad0a]"
        />
        <label class="ml-2 text-sm font-medium text-black/50"
          >Default checkbox</label
        >
      </div>
    </div>
    <div class="mt-7">
      <p class="font-semibold">Price</p>

      <label
        for="default-range"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Default range</label
      >
      <input
        id="default-range"
        type="range"
        class="w-full h-2 rounded-lg appearance-none cursor-pointer bg-[#0aad0a]"
      />
      <p class="mt-7 text-black/50 text-[13px]">Price $10</p>
    </div>
  </div>
</template>
