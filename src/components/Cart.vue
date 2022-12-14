<template>
  <button id="cart" class="relative" @click="showcart" title="Cart">
    <img :src="cart" alt="" />
    <span
      class="bg-red-500 absolute -top-3 -right-3 px-2 font-mediumtext-center text-white rounded-full text-[12px]"
    >
      {{ noDataOrData }}
    </span>
  </button>
</template>

<script setup>
import cart from "~/assets/cart.svg";

import { useCartStore } from "~/store/useCartStore";
import { useProductsStore } from "~/store/useProductsStore";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const Cart = useCartStore();
const product = useProductsStore();

const { showCart, cartItems } = storeToRefs(Cart);
const {} = storeToRefs(product);

const noDataOrData = computed(() => {
  return cartItems.value.length ? cartItems.value.length : "0";
});

const { showcart } = Cart;
</script>
