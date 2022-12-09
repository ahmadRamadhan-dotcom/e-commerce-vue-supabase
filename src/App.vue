<script setup>
import Header from "~/components/Header.vue";
import MobileNav from "~/components/list_view/MobileNav.vue";
import ModalPreview from "~/components/home/ModalPreview.vue";

import { useModalStore } from "~/store/useModalStore";
import { storeToRefs } from "pinia";
import { watchEffect } from "vue";

const data = useModalStore();

const { modal } = storeToRefs(data);

watchEffect(() => {
  if (modal.value === true) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "";
  }
});
</script>

<template>
  <div class="relative">
    <MobileNav />
    <ModalPreview />
    <Header />
    <router-view></router-view>
  </div>
</template>
