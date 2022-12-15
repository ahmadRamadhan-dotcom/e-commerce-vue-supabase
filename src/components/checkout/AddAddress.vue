<script setup>
import { defineAsyncComponent } from "vue";

const AddressCard = defineAsyncComponent(() =>
  import("~/components/checkout/AddressCard.vue")
);
</script>

<template>
  <div class="grid lg:grid-cols-2 gap-4 lg:gap-6">
    <AddressCard />
    <AddressCard />
  </div>
</template>
