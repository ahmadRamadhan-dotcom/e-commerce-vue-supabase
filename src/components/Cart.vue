<template>
  <button id="cart" class="relative" @click="showcart">
    <img :src="cart" alt="" />
    <span
      class="bg-red-500 absolute -top-3 -right-3 px-2 font-mediumtext-center text-white rounded-full text-[12px]"
    >
      {{ cartItems.length ? cartItems.length : "0" }}
    </span>
  </button>
</template>

<script setup>
import cart from "~/assets/cart.svg";

import { useCartStore } from "~/store/useCartStore";
import { useProductsStore } from "~/store/useProductsStore";
import { storeToRefs } from "pinia";

const Cart = useCartStore();
const product = useProductsStore();

const { showCart } = storeToRefs(Cart);
const { cartItems } = storeToRefs(product);

const { showcart } = Cart;
</script>
