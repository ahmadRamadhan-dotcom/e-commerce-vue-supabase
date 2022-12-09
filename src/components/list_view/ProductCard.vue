<script setup>
import ButtonViewandWhislist from "~/components/list_view/ButtonViewandWhislist.vue";
import AddToCart from "~/components/AddToCart.vue";
defineProps({
  products: Array,
});
</script>

<template>
  <article
    v-for="(product, index) in products"
    :key="index"
    class="border border-gray-300 rounded-md group hover:border-green-400 cursor-pointer shadow-sm mt-9 h-[29em] md:h-[15.5em] p-5 md:flex md:gap-14"
  >
    <img :src="product.imageUrl" alt="thumbnail" class="mx-auto md:mx-0" />
    <div>
      <p id="category" class="text-black/50 text-[12px]">
        {{ product.category }}
      </p>
      <p
        id="product_name"
        class="font-semibold text-sm mt-2 text-black/70 hover:text-[#088a08]"
      >
        {{ product.product_name }}
      </p>
      <div class="flex gap-1 items-center mt-2">
        <img src="../../assets/star.svg" alt="" />
        <p id="rating" class="text-black/50 text-[13px]">4.5 (25)</p>
      </div>
      <div id="price" class="text-black/70 font-medium mt-7">
        ${{ product.price }}
      </div>
      <ButtonViewandWhislist />
      <AddToCart />
    </div>
  </article>
</template>
