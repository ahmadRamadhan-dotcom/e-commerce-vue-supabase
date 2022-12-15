<template>
  <div class="">
    <div class="bg-[#f8d6d6] w-full h-[2.4em] rounded-md p-[9px] select-none">
      <p class="text-sm font-medium text-[#831d1d]">
        You’ve got FREE delivery. Start
        <router-link
          to="/checkout"
          class="text-[#691717] font-bold hover:underline"
          @click="hideCart"
        >
          checkout now!</router-link
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "~/store/useCartStore";
import { storeToRefs } from "pinia";

const cart = useCartStore();

const { showCart } = storeToRefs(cart);

const hideCart = () => {
  showCart.value = !showCart.value;
};
</script>
