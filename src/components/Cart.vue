<template>
  <button id="cart" class="relative" @click="showcart">
    <img :src="cart" alt="" />
    <span
      class="bg-red-500 hidden absolute -top-3 -right-3 px-2 font-mediumtext-center text-white rounded-full text-[12px]"
      >1</span
    >
  </button>
</template>

<script setup>
import cart from "~/assets/cart.svg";

import { useCartStore } from "~/store/useCartStore";
import { storeToRefs } from "pinia";

const Cart = useCartStore();

const { showCart } = storeToRefs(Cart);

const { showcart } = Cart;
</script>
