<script setup>
import { defineAsyncComponent } from "vue";
import { useWishlistStore } from "~/store/useWishlistStore";
import { storeToRefs } from "pinia";

const TableData = defineAsyncComponent(() =>
  import("~/components/whilist/TableData.vue")
);

const wishlist = useWishlistStore();

const { wishListItems } = storeToRefs(wishlist);
</script>

<template>
  <main
    class="w-11/12 sm:w-9/12 md:w-11/12 xl:w-[1130px] 2xl:w-[1300px] mx-auto mt-14"
  >
    <div>
      <span class="text-3xl font-bold">My Wishlist </span>
      <p class="text-black/70 font-medium text-sm mt-2">
        There are {{ wishListItems.length ? wishListItems.length : 0 }} products
        in this wishlist.
      </p>
      <div class="h-[70vh] sm:h-full overflow-auto">
        <TableData :items="wishListItems" />
      </div>
    </div>
  </main>
</template>
