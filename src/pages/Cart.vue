<script setup>
import { useCartStore } from "~/store/useCartStore";
import { storeToRefs } from "pinia";
import { computed, defineAsyncComponent } from "vue";

const CheckoutNow = defineAsyncComponent(() =>
  import("~/components/CheckoutNow.vue")
);
const BasketCard = defineAsyncComponent(() =>
  import("~/components/BasketCard.vue")
);
const Summary = defineAsyncComponent(() => import("~/components/Summary.vue"));

const cart = useCartStore();

const { cartItems } = storeToRefs(cart);

const subTotal = computed(() => {
  return cartItems.value.reduce(
    (acc, item) => (acc += item.price * item.quantity + 3),
    0
  );
});

const itemSubTotal = computed(() => {
  return cartItems.value.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );
});

const noData = computed(() => {
  return cartItems.value.length === 0;
});
</script>

<template>
  <main
    class="w-11/12 sm:w-9/12 md:w-11/12 xl:w-[1130px] 2xl:w-[1300px] mx-auto mt-4"
  >
    <div class="mt-14">
      <span class="font-bold text-3xl">Your Cart</span>
      <p class="text-black/70 font-medium mt-3 text-sm">Shopping in 900080</p>
      <div class="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div class="lg:col-span-2 h-[70vh] overflow-auto">
          <CheckoutNow class="mb-3" />
          <div v-if="noData">
            <p class="text-xl font-semibold">
              Your cart is empty, add something to makes you happy!
            </p>
          </div>
          <BasketCard :items="cartItems" />
          <router-link
            to="/"
            type="button"
            class="w-full bg-[#0aad0a] rounded-md py-2 mt-3 text-white text-center font-semibold"
          >
            <span>Continue Shopping</span>
          </router-link>
        </div>
        <div class="border border-gray-300 shadow-sm rounded-md p-5 mt-10">
          <span class="font-medium text-xl">Summary</span>
          <div class="border border-gray-300 rounded-md min-h-[4em] pb-2 mt-6">
            <Summary>
              <p class="font-medium">Item Subtotal</p>
              <p id="price" class="text-black/70 font-medium">
                ${{ itemSubTotal }}
              </p>
            </Summary>
            <Summary>
              <p class="font-medium">Service Fee</p>
              <p id="service_fee" class="text-black/70 font-medium">$3</p>
            </Summary>
            <Summary>
              <p class="font-bold">Subtotal</p>
              <p id="subtotal" class="font-bold">${{ subTotal }}</p>
            </Summary>
          </div>
          <router-link
            class="mt-3 w-full p-3 rounded-md bg-[#0aad0a] text-white font-semibold flex items-center justify-between"
            id="checkout_button"
            aria-label="checkout_button"
            to="/checkout"
          >
            <span class="font-bold">Go to Checkout</span>
            <span id="sub_total" class="font-bold">${{ subTotal }}</span>
          </router-link>
          <p class="text-black/70 text-[12px] mt-3">
            You agree to be bound by the Tokopedia
            <span class="text-[#0aad0a] font-medium">Terms of Service</span> and
            <span class="text-[#0aad0a] font-medium">Privacy Policy</span>
          </p>
          <p id="promo_code" class="mt-6 font-semibold text-xl">Choose promo</p>
        </div>
      </div>
    </div>
  </main>
</template>
