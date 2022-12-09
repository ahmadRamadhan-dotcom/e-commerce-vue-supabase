<template>
  <main
    class="mt-8 mx-auto w-11/12 sm:w-9/12 md:w-11/12 xl:w-[1130px] 2xl:w-[1300px] relative"
  >
    <BreadCumb />
    <Hero />
    <div class="flex items-center justify-between">
      <p class="mt-3 text-black/50">
        <span class="text-black font-medium">{{ productLength }}</span>
        Product found
      </p>
      <ChangeListOrGrid />
    </div>
    <div
      class="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-0 xl:grid-cols-5"
    >
      <ProductCard :products="products" />
    </div>
  </main>
</template>

<script setup>
import Hero from "~/components/home/Hero.vue";
import ProductCard from "~/components/ProductCard.vue";
import ChangeListOrGrid from "~/components/ChangeListOrGrid.vue";
import BreadCumb from "~/components/home/Breadcumb.vue";

import { storeToRefs } from "pinia";
import { useProductsStore } from "~/store/useProductsStore";
import { onMounted, ref } from "vue";

const main = useProductsStore();

const { products, productLength } = storeToRefs(main);
const { getProducts } = main;

onMounted(() => {
  getProducts();
});
</script>
