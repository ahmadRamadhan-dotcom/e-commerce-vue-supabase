<script setup>
import { useCartStore } from "~/store/useCartStore";
import { useProductsStore } from "~/store/useProductsStore";
import { storeToRefs } from "pinia";

import BasketCard from "~/components/BasketCard.vue";

const cart = useCartStore();
const product = useProductsStore();

const { showCart } = storeToRefs(cart);
const { cartItems } = storeToRefs(product);

const hideCart = () => {
  showCart.value = !showCart.value;
};
</script>

<template>
  <div
    :class="showCart ? 'fixed' : 'hidden'"
    @click.self="hideCart"
    class="h-screen top-0 w-full bg-black/70 z-[20]"
  >
    <div
      class="fixed right-0 bg-white h-screen z-[30] w-full sm:w-[540px] transition duration-700"
    >
      <div class="flex justify-between p-3 border-b border-gray-300 pb-5">
        <div class="select-none">
          <span class="font-semibold text-[22px]">Shop Cart</span>
          <p class="text-black/50 text-[12px] font-medium">
            Location in 900080
          </p>
        </div>
        <button aria-label="close_button" type="button" @click="hideCart">
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
      <div class="p-3">
        <div
          class="bg-[#f8d6d6] w-full h-[2.4em] rounded-md p-[9px] select-none"
        >
          <p class="text-sm font-medium text-[#831d1d]">
            You’ve got FREE delivery. Start
            <router-link to="/" class="text-[#691717] font-bold">
              checkout now!</router-link
            >
          </p>
        </div>
      </div>
      <BasketCard />
    </div>
  </div>
</template>
