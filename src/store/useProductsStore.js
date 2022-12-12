import { defineStore } from "pinia";
import { supabase } from "~/supabase";

import Swal from "sweetalert2";

export const useProductsStore = defineStore("main", {
  state: () => ({
    products: [],
    singleProduct: [],
    favorited: [],
    ImageUrl: String,
    cartItems: [],
    error: [],
    status: [],
    productLength: null,
    confirmDelete: false,
    id: 0,
    test: [],
  }),
  actions: {
    async getProducts() {
      try {
        let { data, error, status } = await supabase
          .from("product")
          .select("*");
        if (data) {
          this.products = data;
          this.productLength = data.length;
        }
        this.error = error;
        this.status = status;
      } catch (error) {
        alert(error.message);
      }
    },
    async getProduct(id) {
      try {
        const { data, error, status } = await supabase
          .from("product")
          .select("*")
          .eq("id", id);

        if (data) {
          this.singleProduct = data;
          this.ImageUrl = data[0].imageUrl;
        }
      } catch (error) {
        this.error = error;
      }
    },
    async updateFavorited(id) {
      try {
        const { data, error } = await supabase
          .from("product")
          .upsert({ favorited: true, cart_quantity: 1 })
          .eq("id", id)
          .select();

        if (data) {
          this.favorited = data;
        }
      } catch (error) {
        this.error = error;
      }
    },
    addToCart(item) {
      const index = this.cartItems.find((i) => i.id === item.id);
      if (index) {
        index.quantity++;
      } else {
        this.cartItems.push({ ...item, quantity: 1 });
        Swal.fire({
          icon: "success",
          title: "Your item has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    incrementQuantity(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity += 1;
      }
    },
    decrementQuantity(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity -= 1;
        if (this.cartItems[index].quantity === 0) {
          this.cartItems = this.cartItems.filter(
            (product) => product.id !== item.id
          );
        }
      }
    },
    removeFromCart(item) {
      const that = this;
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
          that.confirmDelete = true;
          if (that.confirmDelete) {
            this.cartItems = this.cartItems.filter(
              (product) => product.id !== item.id
            );
          }
          Swal.fire("Deleted!", "Your prduct has been deleted.", "success");
        }
      });
    },
    filteredProduct(id) {
      const data = this.products.filter((product) => product.id === id);
      this.singleProduct = data;
    },
    getProductId(id) {
      this.id = id;
    },
  },
});
