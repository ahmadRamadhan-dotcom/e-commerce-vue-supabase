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
        <figure class="border border-gray-300 goOnZoom overflow-hidden">
          <img
            alt="large_image"
            id="image"
            class="image shadow-sm rounded-md w-full object-cover origin-[center_center] h-full"
            ref="image"
            :src="data.imageUrl"
          />
        </figure>
      </div>
      <div class="">
        <p class="text-green-500 font-semibold">{{ data.category }}</p>
        <p class="text-2xl font-bold mt-2">{{ data.product_name }}</p>
        <div class="flex items-center gap-1 mt-3">
          <img src="../assets/star.svg" alt="star" />
          <p class="text-black/50 text-sm">
            4.5 <span class="text-green-500 font-semibold">(50 reviews) </span>
          </p>
        </div>
        <p id="price" class="mt-3 text-2xl font-bold">${{ data.price }}</p>

        <AddToCart :products="data" class="mt-10" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useProductsStore } from "~/store/useProductsStore";
import { useRoute } from "vue-router";
import { onMounted, ref, defineAsyncComponent } from "vue";

const AddToCart = defineAsyncComponent(() =>
  import("~/components/AddToCart.vue")
);

const image = ref(null);

const Main = useProductsStore();

const { singleProduct } = storeToRefs(Main);

const { getProduct } = Main;

const { id } = useRoute().params;

onMounted(() => {
  getProduct(id);
});
</script>
