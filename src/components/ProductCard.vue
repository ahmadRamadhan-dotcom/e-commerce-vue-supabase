<template>
  <div
    v-for="(product, index) in products"
    :key="index"
    class="border border-gray-200 group hover:border-green-400 cursor-pointer shadow-sm mt-3 h-[22em] rounded-md w-42 sm:w-52 relative"
  >
    <img :src="product.imageUrl" alt="thumbnail" />
    <div class="content p-5 mt-3">
      <p class="text-black/50 text-[12px]">{{ product.category }}</p>
      <p id="product_name" class="text-sm font-semibold hover:text-[#088a08]">
        {{ product.product_name }}
      </p>
      <div class="flex items-center gap-1 mt-2">
        <img src="../assets/star.svg" class="h-4" alt="star" />

        <p id="rating" class="text-black/50 text-[12px]">4.5 (22)</p>
      </div>
      <div class="mt-4 flex justify-between items-center">
        <p id="price" class="text-[#001e2b] text-sm font-medium">
          ${{ product.price }}
        </p>
        <button
          id="add_to_cart_button"
          type="button"
          aria-label="cart_button"
          class="px-2.5 rounded-md text-[12px] flex items-center gap-1 py-1 text-white bg-[#0aad0a] hover:bg-[#099309] active:bg-[#088a08] active:border active:border-[#088208]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-plus"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Add
        </button>
      </div>
    </div>
    <CardOverlay />
  </div>
</template>

<script setup>
import CardOverlay from "~/components/CardOverlay.vue";

defineProps({
  products: Array,
});
</script>
