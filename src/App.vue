<script setup>
import Header from "~/components/Header.vue";
import MobileNav from "~/components/list_view/MobileNav.vue";
import ModalPreview from "~/components/home/ModalPreview.vue";
import Basket from "~/components/Basket.vue";

import { useModalStore } from "~/store/useModalStore";
import { useCartStore } from "~/store/useCartStore";
import { useProductsStore } from "./store/useProductsStore";
import { storeToRefs } from "pinia";
import { watchEffect } from "vue";

const data = useModalStore();
const cart = useCartStore();
const product = useProductsStore();

const { modal } = storeToRefs(data);
const { showCart } = storeToRefs(cart);
const { id } = storeToRefs(product);

const overflowYHidden = () => {
  if (modal.value === true || showCart.value === true) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "";
  }
};

watchEffect(() => {
  overflowYHidden();
});
</script>

<template>
  <div class="relative">
    <Basket />
    <MobileNav />
    <ModalPreview :id="id" />
    <Header />
    <router-view></router-view>
  </div>
</template>
