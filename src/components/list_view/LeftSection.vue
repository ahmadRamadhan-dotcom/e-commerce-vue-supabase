<script setup>
import { ref, computed } from "vue";
import { getMax, getMin } from "~/utils/helpers";
import { useProductsStore } from "~/store/useProductsStore";
import { storeToRefs } from "pinia";

const main = useProductsStore();

const { keyword } = storeToRefs(main);
</script>

<template>
  <section class="hidden lg:block mt-8">
    <div>
      <p class="font-semibold">Search Product</p>
      <input
        v-model="keyword"
        type="text"
        placeholder="Search product"
        class="border border-gray-200 text-[#5c6c75] focus:border-green-300 shadow-sm pl-5 w-full rounded-md py-1.5 mt-3 focus:ring-2 focus:ring-green-300 focus:outline-none focus:shadow-lg"
      />
    </div>
  </section>
</template>

<style>
#default_checkbox:checked[type="checkbox"] {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3E%3C/svg%3E");
}
</style>
