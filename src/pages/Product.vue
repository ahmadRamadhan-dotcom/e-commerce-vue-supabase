<template>
  <main
    class="mt-5 w-11/12 sm:w-9/12 md:w-11/12 xl:w-[1130px] 2xl:w-[1300px] mx-auto"
  >
    <div class="grid xl:grid-cols-2 xl:gap-12">
      <div class="">
        <!-- <img
          src="https://ralndywgenzrlxupkiap.supabase.co/storage/v1/object/sign/imageurl/iphone_11.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXVybC9pcGhvbmVfMTEud2VicCIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MDU4MDU2NiwiZXhwIjoxOTg1OTQwNTY2fQ.orLa4yBm5F5Md_pdECjC6a5fUDbjOwir8XMfmShr0VE"
          alt=""
          class="border rounded-md shadow-sm cursor-zoom-in trasition duration-300"
        /> -->
        <figure
          class="goOnZoom bg-[url('https://images.unsplash.com/photo-1549915009-4ad67f8ccf6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')]"
          @mousemove="zoom"
          @touchmove="zoom"
        >
          <img
            src="https://images.unsplash.com/photo-1549915009-4ad67f8ccf6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          />
        </figure>
      </div>
      <div class="border-8"></div>
    </div>
  </main>
</template>

<script setup>
import { zoom } from "~/utils/helpers";
import { storeToRefs } from "pinia";
import { useProductsStore } from "~/store/useProductsStore";
import { useRoute } from "vue-router";
import { onMounted } from "vue";

const Main = useProductsStore();

const { singleProduct } = storeToRefs(Main);

const { getProduct } = Main;

const { id } = useRoute().params;

onMounted(() => {
  getProduct(id);
});
</script>

<style scoped>
figure.goOnZoom {
  position: relative;
  width: 500px;
  overflow: hidden;
  cursor: zoom-in;
}
figure.goOnZoom img {
  transition: opacity 0.5s;
  display: block;
  width: 100%;
}
figure.goOnZoom img:hover {
  opacity: 0;
}
</style>
