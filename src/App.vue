<script setup>
import Header from "~/components/Header.vue";
import Breadcumb from "~/components/home/Breadcumb.vue";
import MobileNav from "~/components/list_view/MobileNav.vue";
</script>

<template>
  <div class="relative">
    <MobileNav />
    <Header />
    <Breadcumb />
    <router-view></router-view>
  </div>
</template>
