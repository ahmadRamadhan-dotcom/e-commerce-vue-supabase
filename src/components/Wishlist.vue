<script setup>
import whislist from "~/assets/whislist.svg";

import { useWishlistStore } from "~/store/useWishlistStore";
import { storeToRefs } from "pinia";

const wishlist = useWishlistStore();

const { wishListItems } = storeToRefs(wishlist);

console.log(wishListItems);
</script>

<template>
  <router-link to="/wishlist" class="relative" title="Wishlist">
    <img :src="whislist" alt="" />
    <span
      class="bg-red-500 absolute -top-3 -right-3 px-2 font-mediumtext-center text-white rounded-full text-[12px]"
      >{{ wishListItems.length ? wishListItems.length : 0 }}</span
    >
  </router-link>
</template>
