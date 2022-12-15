<template>
  <div
    class="grid items-center grid-cols-6 gap-2 border-b border-gray-300 pb-3 mt-5"
  >
    <div class="col-span-2 xl:col-span-3">
      <p class="ml-2 text-sm font-medium">Within 2 Hours</p>
    </div>
    <div class="">
      <p id="price" class="text-black/70 font-semibold text-sm">$4</p>
    </div>
    <div class="">
      <button
        type="button"
        class="text-[12px] rounded-md text-white font-semibold bg-red-500 px-2"
      >
        Paid
      </button>
    </div>
    <div class="col-span-2 xl:col-span-1 grid place-content-end">
      <button
        type="button"
        aria-label="choose_option"
        class="border border-gray-300 text-black/50 text-sm py-1 px-2 rounded-md hover:bg-gray-500 hover:text-white"
      >
        Choose
      </button>
    </div>
  </div>
</template>
