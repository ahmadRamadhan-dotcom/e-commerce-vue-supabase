<script setup>
import ButtonViewandWhislist from "~/components/list_view/ButtonViewandWhislist.vue";
import AddToCart from "~/components/AddToCart.vue";

import { useCartStore } from "~/store/useCartStore";
import { useProductsStore } from "~/store/useProductsStore";
import { storeToRefs } from "pinia";

const cart = useCartStore();
const product = useProductsStore();

const { showCart } = storeToRefs(cart);
const {} = storeToRefs(product);

const { showcart } = cart;

defineProps({
  products: Array,
});
</script>

<template>
  <article
    v-for="(product, index) in products"
    :key="index"
    class="border border-gray-300 rounded-md group hover:border-green-400 shadow-sm mt-9 min-h-[29em] md:h-[15.5em] p-5 md:flex md:gap-14"
  >
    <img :src="product.imageUrl" alt="thumbnail" class="mx-auto md:mx-0" />
    <div>
      <p id="category" class="text-black/50 text-[12px]">
        {{ product.category }}
      </p>
      <router-link
        :to="{
          name: 'product',
          params: {
            id: product.id,
          },
        }"
        id="product_name"
        class="font-semibold text-sm mt-2 text-black/70 hover:text-[#088a08]"
      >
        {{ product.product_name }}
      </router-link>
      <div class="flex gap-1 items-center mt-2">
        <img src="../../assets/star.svg" alt="" />
        <p id="rating" class="text-black/50 text-[13px]">4.5 (25)</p>
      </div>
      <div id="price" class="text-black/70 font-medium mt-7">
        ${{ product.price }}
      </div>
      <ButtonViewandWhislist />
      <AddToCart :products="product" />
    </div>
  </article>
</template>
