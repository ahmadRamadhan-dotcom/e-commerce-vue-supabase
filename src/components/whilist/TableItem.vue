<script setup>
import { useWishlistStore } from "~/store/useWishlistStore";
import { useCartStore } from "~/store/useCartStore";
import { storeToRefs } from "pinia";

const wishlist = useWishlistStore();
const cart = useCartStore();

const { removeWishList } = wishlist;
const { addToCart, showcart } = cart;

const props = defineProps({
  items: Array,
});
</script>

<template>
  <tr v-for="(item, index) in items" :key="index" class="text-black">
    <th scope="row" class="py-4 px-6" id="thumbnail">
      <img :src="item.imageUrl" class="w-20" />
    </th>
    <th scope="row" class="py-4 px-6 font-medium" id="product_name">
      {{ item.product_name }}
    </th>
    <td class="py-4 px-6" id="amount">${{ item.price }}</td>
    <td class="py-4 px-6">
      <span
        class="text-xs mr-2 px-2.5 text-[10px] py-0.5 rounded bg-green-600 text-white font-bold"
        >Ready</span
      >
    </td>
    <td class="py-4 px-3">
      <button
        type="button"
        aria-label="add_to_cart_button"
        class="bg-[#0aad0a] px-2 py-1 rounded-md hover:bg-green-600 text-center text-white text-[10px]"
        @click="
          addToCart(item);
          showcart();
        "
      >
        Add to Cart
      </button>
    </td>
    <td class="py-4 px-6">
      <button
        type="button"
        aria-label="remove_item"
        class="text-black/50"
        title="Remove"
        @click="removeWishList(item)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-trash"
          viewBox="0 0 16 16"
        >
          <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
          />
          <path
            fill-rule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
          />
        </svg>
      </button>
    </td>
  </tr>
</template>
