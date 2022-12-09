<template>
  <div
    class="flex items-center gap-2 mt-8 mx-auto w-11/12 sm:w-9/12 md:w-11/12 xl:w-[1130px] 2xl:w-[1300px]"
  >
    <div
      v-for="(data, index) in breadcumbsData"
      :key="index"
      class="flex items-center gap-2"
    >
      <p
        :class="!lastItem(index) ? 'text-green-500' : 'text-gray-500'"
        class="text-sm font-medium"
      >
        {{ data.name }}
      </p>
      <svg
        class="w-6 h-6 text-gray-300"
        fill="currentColor"
        v-if="!lastItem(index)"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script setup>
const breadcumbsData = [
  { id: 1, name: "Home" },
  { id: 2, name: "Shop" },
  { id: 3, name: "All Product" },
];

const getLastItem = breadcumbsData[breadcumbsData.length - 1];

const lastItem = (index) => {
  return index + 1 === getLastItem.id;
};
</script>
