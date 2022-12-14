<template>
  <header
    class="w-11/12 sm:w-9/12 md:w-11/12 xl:w-[1130px] 2xl:w-[1300px] mx-auto mt-4"
  >
    <div class="flex justify-between xl:grid xl:grid-cols-2 xl:gap-12">
      <router-link to="/">
        <img src="../assets/tokopedia.svg" alt="header_logo" />
      </router-link>
      <div class="flex items-center gap-4 justify-end">
        <WishList />
        <Cart />
      </div>
    </div>
  </header>
</template>

<script setup>
import WishList from "~/components/Wishlist.vue";
import Cart from "~/components/Cart.vue";
</script>
