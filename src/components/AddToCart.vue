<template>
  <button
    aria-label="add_to_cart_button"
    type="button"
    class="mt-2 px-3 py-1.5 flex gap-2 items-center text-white rounded-md bg-[#0aad0a] hover:bg-[#088a08]"
    @click="
      showcart();
      addToCart(products);
    "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-shopping-bag"
    >
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
    Add to cart
  </button>
</template>

<script setup>
import { useCartStore } from "~/store/useCartStore";
import { useProductsStore } from "~/store/useProductsStore";
import { storeToRefs } from "pinia";

const props = defineProps({
  products: Object,
});

const cart = useCartStore();
const product = useProductsStore();

const { showCart } = storeToRefs(cart);

const { showcart, addToCart } = cart;
</script>
