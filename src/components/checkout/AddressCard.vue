<script setup>
import { limitString } from "~/utils/helpers";
</script>

<template>
  <article class="border border-gray-300 min-h-[13em] rounded-md mt-5 p-5">
    <div>
      <div class="flex items-center mb-4">
        <input
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          class="w-4 h-4 text-blue-600 focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
        />
        <label for="default-radio-1" class="ml-2 text-sm font-medium"
          >Home</label
        >
      </div>
      <p id="name" class="text-black/50 font-semibold text-sm">
        Ahmad Ramadhan
      </p>
      <p id="address" class="text-black/50 font-semibold text-sm">
        {{
          limitString(
            "4450 North Avenue Oakland, Nebraska, United States, P: 402-776-1106",
            70
          )
        }}
      </p>
      <p id="default_address" class="text-red-500 font-semibold text-sm mt-5">
        Default address
      </p>
    </div>
  </article>
</template>
