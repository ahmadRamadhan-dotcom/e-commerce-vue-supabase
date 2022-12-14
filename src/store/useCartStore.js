import { defineStore } from "pinia";
import { useProductsStore } from "~/store/useProductsStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";

import Swal from "sweetalert2";

export const useCartStore = defineStore("cart", () => {
  // import from another store or composing store
  const product = useProductsStore();
  const { products } = storeToRefs(product);

  // state
  const showCart = ref(false);
  const cartItems = ref([]);
  const confirmDelete = ref(false);

  // actions
  const showcart = () => {
    return (showCart.value = !showCart.value);
  };

  const addToCart = (item) => {
    const index = cartItems.value.find((i) => i.id === item.id);
    if (index) {
      Swal.fire({
        icon: "success",
        title: "Your item has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      index.quantity++;
    } else {
      Swal.fire({
        icon: "success",
        title: "Your item has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      cartItems.value.push({ ...item, quantity: 1 });
    }
  };

  const incrementQuantity = (item) => {
    let index = cartItems.value.findIndex((product) => product.id === item.id);
    if (index !== -1) {
      cartItems.value[index].quantity += 1;
    }
  };

  const decrementQuantity = (item) => {
    let index = cartItems.value.findIndex((product) => product.id === item.id);
    if (index !== -1) {
      cartItems.value[index].quantity -= 1;
      if (cartItems.value[index].quantity === 0) {
        cartItems.value = cartItems.value.filter(
          (product) => product.id !== item.id
        );
      }
    }
  };

  const removeFromCart = (item) => {
    Swal.fire({
      title: "Are you sure to delete this product?",
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
          cartItems.value = cartItems.value.filter(
            (product) => product.id !== item.id
          );
        }
        Swal.fire("Deleted!", "Your prduct has been deleted.", "success");
      }
    });
  };

  const emptyCart = () => {
    if (cartItems.value.length == 0) {
      Swal.fire({
        icon: "error",
        title: "Opps ...",
        text: "You cannot do that, because the cart is still empty",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      // the cart > 0
      Swal.fire({
        title: "Are you sure to delete all product?",
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
            Swal.fire("Deleted!", "Your prducts has been deleted.", "success");
            cartItems.value.splice(0);
          }
        }
      });
    }
  };

  return {
    showcart,
    showCart,
    products,
    addToCart,
    cartItems,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    emptyCart,
  };
});
