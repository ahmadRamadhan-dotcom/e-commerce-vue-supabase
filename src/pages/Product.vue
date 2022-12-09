<template>
  <main
    class="mt-5 w-11/12 sm:w-9/12 md:w-11/12 xl:w-[1130px] 2xl:w-[1300px] mx-auto"
  >
    <div class="grid xl:grid-cols-2 xl:gap-12">
      <div class="border-8"></div>
      <div class="border-8"></div>
    </div>
  </main>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useProductsStore } from "~/store/useProductsStore";
import { useRoute } from "vue-router";
import { onMounted } from "vue";

const Main = useProductsStore();

const { singleProduct } = storeToRefs(Main);

const { getProduct } = Main;

const { id } = useRoute().params;

onMounted(() => {
  getProduct(id);
});
</script>
