<script setup>
import { useModalStore } from "~/store/useModalStore";
import { useProductsStore } from "~/store/useProductsStore";
import { storeToRefs } from "pinia";

const props = defineProps({
  product: Object,
});

const data = useModalStore();
const prodtuctt = useProductsStore();

const { products } = storeToRefs(prodtuctt);

const { modal } = storeToRefs(data);

const { getProduct } = prodtuctt;
const showModal = () => {
  modal.value = !modal.value;
};
</script>

<template>
  <div
    class="absolute hidden group-hover:flex items-center gap-2 left-[45%] top-[45%] -translate-x-[50%] z-[30] -translate-y-[50%] cursor-pointer shadow-md"
  >
    <div
      id="container"
      class="bg-white border hover:bg-[#0aad0a] hover:text-white w-8 h-7 flex relative justify-center items-center rounded-md"
      @click="showModal"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="bi bi-eye h-[18px] mx-auto"
        viewBox="0 0 16 16"
      >
        <path
          d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
        />
        <path
          d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
        />
      </svg>
      <div
        aria-label="quick_view_button"
        type="button"
        class="absolute tooltip hidden -top-9 bg-black w-24 py-1 rounded-md"
      >
        <p
          type="button"
          aria-label="quick_view_button"
          class="text-center mx-auto text-white text-[12px] select-none"
        >
          Quick View
        </p>
      </div>
    </div>
    <div
      id="container"
      class="bg-white relative hover:bg-[#0aad0a] hover:text-white w-8 h-7 flex justify-center items-center rounded-md"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-heart"
        viewBox="0 0 16 16"
      >
        <path
          d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
        />
      </svg>
      <div class="absolute tooltip hidden -top-7 bg-black py-1 px-4 rounded-md">
        <p class="text-center text-white text-[12px]">Whislist</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#container:hover .tooltip {
  display: flex;
}
</style>
