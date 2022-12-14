import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useProductsStore } from "./useProductsStore";
import { storeToRefs } from "pinia";

import Swal from "sweetalert2";

export const useWishlistStore = defineStore("wish", () => {
  // state
  const wishListItems = ref([]);
  const confirmDelete = ref(false);

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

  const removeWishList = (item) => {
    Swal.fire({
      title: "Are you sure to delete this product from wishlist?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        confirmDelete.value = true;
        if (confirmDelete) {
          wishListItems.value = wishListItems.value.filter(
            (items) => items.id !== item.id
          );
        }
        Swal.fire("Deleted!", "Your prduct has been deleted.", "success");
      }
    });
  };

  return { addToWishList, wishListItems, removeWishList };
});
