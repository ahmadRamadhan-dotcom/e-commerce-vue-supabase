<script setup>
import whislist from "~/assets/whislist.svg";
</script>

<template>
  <router-link to="/whislist" class="relative">
    <img :src="whislist" alt="" />
    <span
      class="bg-red-500 absolute -top-3 -right-3 px-2 font-mediumtext-center text-white rounded-full text-[12px]"
      >0</span
    >
  </router-link>
</template>
