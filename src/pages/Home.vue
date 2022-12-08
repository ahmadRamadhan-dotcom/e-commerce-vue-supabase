<template>
  <main
    class="mt-8 mx-auto w-11/12 sm:w-9/12 md:w-11/12 xl:w-[1130px] 2xl:w-[1300px]"
  >
    <Breadcumb />
    <Hero />
    <p class="mt-3 text-black/50">
      <span class="text-black font-medium">{{ products.length }}</span> Product
      found
    </p>
    <div
      class="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-0 xl:grid-cols-5"
    >
      <ProductCard :products="products" />
    </div>
  </main>
</template>

<script setup>
// internal imports
import Breadcumb from "~/components/home/Breadcumb.vue";
import Hero from "~/components/home/Hero.vue";
import ProductCard from "~/components/ProductCard.vue";
import { supabase } from "~/supabase";
import { onMounted, ref } from "vue";

const products = ref(null);

async function getProducts() {
  try {
    let { data, error, status } = await supabase.from("product").select("*");
    if (data) {
      products.value = data;
    }
  } catch (error) {
    alert(error.message);
  }
}

onMounted(() => {
  getProducts();
});
</script>
