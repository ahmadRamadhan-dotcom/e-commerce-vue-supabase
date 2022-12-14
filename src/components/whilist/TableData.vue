<script setup>
import { defineAsyncComponent } from "vue";

const TableItem = defineAsyncComponent(() =>
  import("~/components/whilist/TableItem.vue")
);

const props = defineProps({
  items: Array,
});
</script>

<template>
  <div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-5">
    <table class="w-full text-sm text-left text-gray-400">
      <thead class="text-x bg-gray-200 text-black">
        <tr>
          <th scope="col" class="py-3 px-6"></th>
          <th scope="col" class="py-3 px-6">Product</th>
          <th scope="col" class="py-3 px-6">Amount</th>
          <th scope="col" class="py-3 px-6">Status</th>
          <th scope="col" class="py-3 px-6">Actions</th>
          <th scope="col" class="py-3 px-6">Remove</th>
        </tr>
      </thead>
      <tbody>
        <TableItem :items="items" />
      </tbody>
    </table>
  </div>
</template>
