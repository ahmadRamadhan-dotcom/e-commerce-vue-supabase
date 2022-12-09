<template>
  <section class="mt-8">
    <div>
      <p class="font-semibold">Search Product</p>
      <input
        type="text"
        placeholder="Search product"
        class="border border-gray-200 text-[#5c6c75] focus:border-green-300 shadow-sm pl-5 w-full rounded-md py-1.5 mt-3 focus:ring-2 focus:ring-green-300 focus:outline-none focus:shadow-lg"
      />
      <div class="flex items-center mt-4">
        <input
          type="checkbox"
          id="default_checkbox"
          value=""
          class="appearance-none cursor-pointer w-4 h-4 text-blue-600 rounded focus:ring-green-400 ring-offset-gray-800 focus:ring-2 bg-white border border-gray-300 checked:bg-[#0aad0a]"
        />
        <label
          for="default_checkbox"
          class="ml-2 text-sm font-medium select-none cursor-pointer text-black/50"
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
  </section>
</template>

<style>
#default_checkbox:checked[type="checkbox"] {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3E%3C/svg%3E");
}
</style>
