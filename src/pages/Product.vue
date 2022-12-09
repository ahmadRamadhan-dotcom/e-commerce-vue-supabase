<template>
  <main
    v-for="(data, index) in singleProduct"
    :key="index"
    class="mt-5 w-11/12 sm:w-9/12 md:w-11/12 xl:w-[1130px] 2xl:w-[1300px] mx-auto"
  >
    <div
      class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10 xl:grid-cols-2 xl:gap-12"
    >
      <div class="">
        <figure
          class="border border-gray-300 goOnZoom"
          @mousemove="zoom"
          @touchmove="zoom"
        >
          <img
            alt="large_image"
            class="shadow-sm rounded-md"
            :src="data.imageUrl"
          />
        </figure>
      </div>
      <div class="">
        <p class="text-green-500 font-semibold">Tech</p>
        <p class="text-2xl font-bold mt-2">Iphone 14</p>
        <div class="flex items-center gap-1 mt-3">
          <img src="../assets/star.svg" alt="star" />
          <p class="text-black/50 text-sm">
            4.5 <span class="text-green-500 font-semibold">(50 reviews)</span>
          </p>
        </div>
        <p id="price" class="mt-3 text-2xl font-bold">$40</p>
        <div class="flex items-center mt-8">
          <button
            class="border border-gray-300 text-black/50 px-2 hover:bg-gray-300"
            aria-label="minus_button"
            type="button"
          >
            -
          </button>
          <input
            type="number"
            class="border border-gray-300 w-10 pl-3 py-[2px] text-black/70 text-sm"
            value="1"
          />
          <button
            class="border border-gray-300 text-black/50 px-2 hover:bg-gray-300"
            aria-label="add_button"
            type="button"
          >
            +
          </button>
        </div>
        <AddToCart class="mt-10" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { zoom } from "~/utils/helpers";
import { storeToRefs } from "pinia";
import { useProductsStore } from "~/store/useProductsStore";
import { useRoute } from "vue-router";
import { onMounted, watchEffect, ref } from "vue";

import AddToCart from "~/components/AddToCart.vue";

const Main = useProductsStore();

const { singleProduct, ImageUrl } = storeToRefs(Main);

const { getProduct } = Main;

const { id } = useRoute().params;

onMounted(() => {
  getProduct(id);
});
</script>

<style scoped>
figure.goOnZoom {
  position: relative;
  overflow: hidden;
  cursor: zoom-in;
}
figure.goOnZoom img {
  transition: opacity 0.5s;
  display: block;
  width: 100%;
}
figure.goOnZoom img:hover {
  opacity: 0;
}
</style>
