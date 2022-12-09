<template>
  <div class="flex items-center gap-2">
    <router-link
      v-for="(data, index) in changeListData"
      :key="index"
      :to="data.to"
    >
      <img :src="data.image" alt="" />
    </router-link>
  </div>
</template>

<script setup>
import Grid from "~/assets/grid.svg";
import List from "~/assets/list.svg";
import Grid3x3 from "~/assets/grid3x3.svg";

const changeListData = [
  { id: 1, image: List, to: "/list" },
  { id: 2, image: Grid, to: "/" },
  { id: 3, image: Grid3x3, to: "/grid3x3" },
];
</script>
