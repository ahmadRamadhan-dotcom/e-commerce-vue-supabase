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
    <p class="text-sm text-black/70 mt-3">Scroll to get more product</p>
    <div
      ref="el"
      class="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-0 xl:grid-cols-5"
    >
      <ProductCard :products="products" />
    </div>
  </main>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useProductsStore } from "~/store/useProductsStore";
import { onMounted, ref, toRefs, defineAsyncComponent } from "vue";

const Hero = defineAsyncComponent(() => import("~/components/home/Hero.vue"));
const ChangeListOrGrid = defineAsyncComponent(() =>
  import("~/components/ChangeListOrGrid.vue")
);
const BreadCumb = defineAsyncComponent(() =>
  import("~/components/home/Breadcumb.vue")
);
const ProductCard = defineAsyncComponent(() =>
  import("~/components/ProductCard.vue")
);

const totalProduct = 99;

const main = useProductsStore();

const { products, productLength } = storeToRefs(main);

const { getProducts } = main;

onMounted(() => {
  getProducts();
});
</script>
