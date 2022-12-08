<template>
  <main
    class="mt-8 mx-auto w-11/12 sm:w-9/12 md:w-11/12 xl:w-[1130px] 2x:w-[1300px]"
  >
    <Breadcumb />
    <Hero />
    <div class="grid mt-4 xl:grid-cols-5">
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
