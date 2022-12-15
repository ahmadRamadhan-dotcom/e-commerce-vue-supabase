<script setup>
import { limitString } from "~/utils/helpers";
defineProps({
  cartItems: Array,
});
</script>

<template>
  <div
    v-for="(data, index) in cartItems"
    :key="index"
    class="p-4 pb-3 border-b border-gray-300 grid grid-cols-3 gap-3"
  >
    <div class="col-span-2 flex gap-2">
      <img class="h-14" :src="data.imageUrl" alt="product_image" />
      <div>
        <p class="text-black/70 font-bold text-sm" id="product_name">
          {{ limitString(data.product_name, 10) }}
        </p>
        <span class="text-black/70 text-[12px]">1Kg</span>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <span id="quantity" class="text-[12px]">{{ data.quantity }}</span>
      <span id="price" class="font-bold text-[12px]">${{ data.price }}</span>
    </div>
  </div>
</template>
