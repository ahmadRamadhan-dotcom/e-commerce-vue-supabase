<script setup>
import { useProductsStore } from "~/store/useProductsStore";
import { useHeaderStore } from "~/store/useHeaderStore";
import { storeToRefs } from "pinia";
import { watchEffect, onMounted, defineAsyncComponent } from "vue";

const Hero = defineAsyncComponent(() => import("~/components/home/Hero.vue"));
const ChangeListOrGrid = defineAsyncComponent(() =>
  import("~/components/ChangeListOrGrid.vue")
);
const LeftSection = defineAsyncComponent(() =>
  import("~/components/list_view/LeftSection.vue")
);
const ProductCard = defineAsyncComponent(() =>
  import("~/components/list_view/ProductCard.vue")
);

const main = useProductsStore();
const header = useHeaderStore();

const { products, productLength } = storeToRefs(main);
const { getProducts } = main;
const { openHeader } = storeToRefs(header);

const overflowYHidden = () => {
  if (openHeader.value === true) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "";
  }
};

watchEffect(() => {
  overflowYHidden();
});

onMounted(() => {
  getProducts();
});
</script>

<template>
  <div
    class="mx-auto h-[500vh] relative w-11/12 sm:w-9/12 md:w-11/12 xl:w-[1130px] 2xl:w-[1300px]"
  >
    <div class="lg:grid lg:grid-cols-4 lg:gap-7">
      <LeftSection />
      <div class="col-span-3">
        <Hero />
        <div class="xl:flex xl:justify-between">
          <p class="mt-3 text-black/50">
            <span class="text-black font-medium">{{ productLength }}</span>
            Product found
          </p>
          <div class="flex items-center justify-between mt-5">
            <ChangeListOrGrid />
            <button
              @click="openHeader = !openHeader"
              type="button"
              aria-label="filter_button"
              class="text-black/70 bg-transparent flex lg:hidden active:bg-[#c1c7c6] hover:bg-[#c1c7c6] items-center gap-3 border border-gray-400 px-3 py-1.5 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-filter me-2"
              >
                <polygon
                  points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
                ></polygon>
              </svg>
              Filters
            </button>
          </div>
        </div>
        <ProductCard :products="products" />
      </div>
    </div>
  </div>
</template>
