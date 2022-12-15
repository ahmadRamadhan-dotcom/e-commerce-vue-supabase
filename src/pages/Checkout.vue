<script setup>
import { defineAsyncComponent } from "vue";
import { useCartStore } from "~/store/useCartStore";
import { storeToRefs } from "pinia";

const AddAdress = defineAsyncComponent(() =>
  import("~/components/checkout/AddAddress.vue")
);
const Delivery = defineAsyncComponent(() =>
  import("~/components/checkout/Delivery.vue")
);
const DeliveryInstructions = defineAsyncComponent(() =>
  import("~/components/checkout/DeliveryInstructions.vue")
);
const PaymentMethod = defineAsyncComponent(() =>
  import("~/components/checkout/PaymentMethod.vue")
);
const OrderCart = defineAsyncComponent(() =>
  import("~/components/checkout/OrderCart.vue")
);

const cart = useCartStore();

const { cartItems } = storeToRefs(cart);
</script>

<template>
  <main
    class="w-11/12 sm:w-9/12 md:w-11/12 xl:w-[1130px] 2xl:w-[1300px] mx-auto mt-4"
  >
    <div class="mt-10">
      <p class="text-2xl sm:text-3xl font-semibold">Checkout</p>
      <div class="grid lg:grid-cols-3 gap-14 pb-5">
        <div class="md:col-span-2">
          <div class="flex items-center justify-between">
            <div class="flex mt-8 items-center gap-2">
              <span class="text-black/70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
                  />
                  <path
                    d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  />
                </svg>
              </span>
              <p class="font-semibold text-lg">Add delivery address</p>
            </div>
            <button
              type="button"
              aria-label="add_new-address"
              class="border border-green-500 hover:bg-green-500 hover:text-white rounded-sm mt-8 text-sm px-3 bg-white text-green-500 text-center"
            >
              Add a new address
            </button>
          </div>
          <AddAdress />
          <div class="mt-8">
            <div class="flex gap-2 items-center">
              <span class="text-black/70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                  />
                  <path
                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                  />
                </svg>
              </span>
              <p class="text-lg font-semibold">Delivery Time</p>
            </div>
            <Delivery />
          </div>
          <DeliveryInstructions />
          <PaymentMethod />
          <div class="grid place-content-end mt-5">
            <button
              type="button"
              class="bg-green-600 text-sm rounded-md px-3 py-2 text-white"
            >
              Place order
            </button>
          </div>
        </div>
        <div
          class="border border-gray-300 rounded-md h-[30em] overflow-auto"
          id="order_detail"
        >
          <div class="border-b border-gray-300 pb-3 p-4">
            <p class="text-lg font-semibold">Order details</p>
          </div>
          <OrderCart :cartItems="cartItems" />
        </div>
      </div>
    </div>
  </main>
</template>
