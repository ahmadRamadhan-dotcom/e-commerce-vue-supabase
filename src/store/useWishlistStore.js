import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useProductsStore } from "./useProductsStore";
import { storeToRefs } from "pinia";

import Swal from "sweetalert2";

export const useWishlistStore = defineStore("wish", () => {
  // state
  const wishListItems = ref([]);

  // actions
  const addToWishList = (item) => {
    const index = wishListItems.value.find((i) => i.id === item.id);
    if (index) {
      Swal.fire({
        icon: "success",
        title: "Your item has been saved to wishlist",
        showConfirmButton: false,
      });
      index.quantity++;
    } else {
      Swal.fire({
        icon: "success",
        title: "Your item has been saved to wishlist",
        showConfirmButton: false,
        timer: 1500,
      });
      wishListItems.value.push({ ...item, quantity: 1 });
    }
  };

  return { addToWishList, wishListItems };
});
