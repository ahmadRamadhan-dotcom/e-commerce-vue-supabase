<script setup>
import { useProductsStore } from "~/store/useProductsStore";
import { storeToRefs } from "pinia";

const product = useProductsStore();

const { cartItems } = storeToRefs(product);

const { incrementQuantity, decrementQuantity, removeFromCart } = product;

const props = defineProps({
  items: Array,
});
</script>

<template>
  <div
    v-for="(data, index) in items"
    :key="index"
    class="p-5 flex items-center gap-3"
  >
    <div class="flex gap-3 w-1/2">
      <img :src="data.imageUrl" alt="thumbnail" id="thumbnail" class="h-20" />
      <div>
        <router-link
          :to="{
            name: 'product',
            params: {
              id: data.id,
            },
          }"
          class="font-bold text-[12px] hover:text-green-500"
          >{{ data.product_name }}</router-link
        >
        <p class="text-[12px] text-black/50 mt-2">1kg</p>
        <button
          type="button"
          aria-label="remove_from_cart"
          class="flex gap-1 mt-2"
          @click="removeFromCart(data)"
        >
          <span class="text-green-500">
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
          </span>
          <p class="text-[12px] text-black/50 font-semibold">Remove</p>
        </button>
      </div>
    </div>
    <div class="w-1/2 flex gap-3">
      <div class="flex items-center">
        <button
          class="border border-gray-300 text-black/50 px-2 hover:bg-gray-300"
          aria-label="minus_button"
          type="button"
          @click="decrementQuantity(data)"
        >
          -
        </button>
        <p
          type="number"
          class="border border-gray-300 w-14 pl-3 py-[2px] text-black/70 text-sm"
        >
          {{ data.quantity }}
        </p>
        <button
          class="border border-gray-300 text-black/50 px-2 hover:bg-gray-300"
          aria-label="add_button"
          type="button"
          @click="incrementQuantity(data)"
        >
          +
        </button>
      </div>
      <div class="w-full grid place-content-end">
        <p class="font-bold text-black/70">
          ${{
            cartItems.reduce(
              (acc, item) => (acc += item.price * item.quantity),
              0
            )
          }}
        </p>
      </div>
    </div>
  </div>
</template>
