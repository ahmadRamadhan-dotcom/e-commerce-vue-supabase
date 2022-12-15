<script setup>
import { defineAsyncComponent, computed, ref } from "vue";
import { useWishlistStore } from "~/store/useWishlistStore";
import { storeToRefs } from "pinia";

const TableData = defineAsyncComponent(() =>
  import("~/components/whilist/TableData.vue")
);

const search = ref("");

const wishlist = useWishlistStore();

const { wishListItems } = storeToRefs(wishlist);

const dataOrNoData = computed(() => {
  return wishListItems.value.length ? wishListItems.value.length : 0;
});

const noData = computed(() => {
  return wishListItems.value >= 0;
});

const filterWishlist = computed(() => {
  return wishListItems.value.filter((item) => {
    return (
      item.product_name.toLowerCase().includes(search.value.toLowerCase()) ||
      item.category.toLowerCase().includes(search.value.toLowerCase())
    );
  });
});
</script>

<template>
  <main
    class="w-11/12 sm:w-9/12 md:w-11/12 xl:w-[1130px] 2xl:w-[1300px] mx-auto mt-14"
  >
    <div>
      <span class="text-3xl font-bold">My Wishlist </span>
      <p class="text-black/70 font-medium text-sm mt-2">
        There are {{ dataOrNoData }} products in this wishlist.
      </p>
      <div id="search" v-if="wishListItems.length > 0">
        <p class="text-sm text-black/70 font-semibold mt-3">
          Search product by product name/category
        </p>
        <input
          type="text"
          class="focus:outline-none focus:ring border border-gray-300 rounded-md mt-3 pl-3"
          placeholder="Search Product"
          v-model="search"
        />
      </div>
      <p v-if="noData" class="text-black text-xl mt-3">
        You wishlist still empty
        <router-link to="/" class="hover:underline text-blue-500"
          >continue shopping</router-link
        >
      </p>
      <div class="h-[70vh] sm:h-full overflow-auto">
        <TableData :items="filterWishlist" />
      </div>
    </div>
  </main>
</template>
