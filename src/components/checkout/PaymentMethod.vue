<script setup>
import { defineAsyncComponent } from "vue";

const PaymentWithPaypal = defineAsyncComponent(() =>
  import("~/components/checkout/PaymentWithPaypal.vue")
);

const CreditCard = defineAsyncComponent(() =>
  import("~/components/checkout/CreditCard.vue")
);

const CashOnDelivery = defineAsyncComponent(() =>
  import("~/components/checkout/CashOnDelivery.vue")
);
</script>

<template>
  <div class="mt-10">
    <div class="flex items-center gap-2">
      <span class="text-black/70">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-wallet"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"
          />
        </svg>
      </span>
      <p class="text-lg font-semibold">Payment method</p>
    </div>
    <PaymentWithPaypal />
    <CreditCard />
    <CashOnDelivery />
    <div class="grid place-content-end mt-5">
      <router-link
        to="/success"
        type="button"
        class="bg-green-600 text-sm rounded-md px-3 py-2 text-white"
      >
        Place order
      </router-link>
    </div>
  </div>
</template>
