<script setup>
import ButtonViewandWhislist from "~/components/list_view/ButtonViewandWhislist.vue";
</script>

<template>
  <article
    class="border border-gray-300 rounded-md group hover:border-green-400 cursor-pointer shadow-sm mt-9 h-[29em] md:h-[15.5em] p-5 md:flex md:gap-14"
  >
    <img
      src="https://ralndywgenzrlxupkiap.supabase.co/storage/v1/object/sign/imageurl/i5_12400f.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXVybC9pNV8xMjQwMGYuanBnIiwidHJhbnNmb3JtYXRpb25zIjoiIiwiaWF0IjoxNjcwNDcwNzA5LCJleHAiOjE5ODU4MzA3MDl9.S7lDYcrYCh8VjcsZvX14QVGtpWWFtkBiBczBwOOsPv0"
      alt="thumbnail"
      class="mx-auto md:mx-0"
    />
    <div>
      <p id="category" class="text-black/50 text-[12px]">Tech</p>
      <p
        id="product_name"
        class="font-semibold text-sm mt-2 text-black/70 hover:text-[#088a08]"
      >
        i5 12400f
      </p>
      <div class="flex gap-1 items-center mt-2">
        <img src="../../assets/star.svg" alt="" />
        <p id="rating" class="text-black/50 text-[13px]">4.5 (25)</p>
      </div>
      <div id="price" class="text-black/70 font-medium mt-7">$10</div>
      <ButtonViewandWhislist />
      <button
        aria-label="add_to_cart_button"
        type="button"
        class="mt-2 px-3 py-1.5 flex gap-2 items-center text-white rounded-md bg-[#0aad0a] hover:bg-[#088a08]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-shopping-bag"
        >
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        Add to cart
      </button>
    </div>
  </article>
</template>
