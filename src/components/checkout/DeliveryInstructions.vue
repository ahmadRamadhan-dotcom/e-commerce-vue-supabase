<template>
  <div class="mt-10">
    <div class="flex items-center gap-2">
      <span class="text-black/70">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-bag-check"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
          />
          <path
            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
          />
        </svg>
      </span>
      <p class="text-lg font-semibold">Delivery instructions</p>
    </div>
    <p class="text-sm text-black/70 mt-3">Delivery instructions</p>
    <textarea
      class="resize-y rounded-md border border-gray-300 w-full mt-3 p-3 focus:ring focus:ring-green-200 focus:outline-none focus:transition focus:duration-300 text-sm"
      placeholder="Write delivery instructions"
    ></textarea>
    <p class="text-black/70 text-sm">
      Add instructions for how you want your order shopped and/or delivered
    </p>
  </div>
</template>
