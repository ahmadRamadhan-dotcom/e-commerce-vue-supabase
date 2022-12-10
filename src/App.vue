<script setup>
import Header from "~/components/Header.vue";
import MobileNav from "~/components/list_view/MobileNav.vue";
import ModalPreview from "~/components/home/ModalPreview.vue";
import Basket from "~/components/Basket.vue";

import { useModalStore } from "~/store/useModalStore";
import { useCartStore } from "~/store/useCartStore";
import { storeToRefs } from "pinia";
import { watchEffect } from "vue";

const data = useModalStore();
const cart = useCartStore();

const { modal } = storeToRefs(data);
const { showCart } = storeToRefs(cart);

watchEffect(() => {
  if (modal.value === true || showCart.value === true) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "";
  }
});
</script>

<template>
  <div class="relative">
    <Basket />
    <MobileNav />
    <ModalPreview />
    <Header />
    <router-view></router-view>
  </div>
</template>
