<script setup>
import ProductCard from "~/components/list_view/ProductCard.vue";

import { useModalStore } from "~/store/useModalStore";
import { useProductsStore } from "~/store/useProductsStore";
import { storeToRefs } from "pinia";
import { ref, onMounted, computed } from "vue";

const props = defineProps({
  id: Number,
});

const product = useProductsStore();
const data = useModalStore();

const { products } = storeToRefs(product);
const { modal } = storeToRefs(data);

const filter = computed(() => {
  return products.value.filter((p) => p.id === props.id);
});
</script>

<template>
  <div
    :class="modal ? 'block' : 'hidden'"
    class="relative z-[10]"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      type="button"
      class="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity"
    ></div>

    <div
      @click="modal = !modal"
      class="fixed select-none inset-0 z-10 overflow-y-auto"
    >
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 min-h-[20em] w-[900px]"
        >
          <ProductCard :products="filter" />
        </div>
      </div>
    </div>
  </div>
</template>
