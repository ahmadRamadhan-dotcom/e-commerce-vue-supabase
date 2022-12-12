import { defineStore } from "pinia";
import { supabase } from "~/supabase";

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
    id: 0,
  }),
  getters: {
    countCartItems() {
      return this.cartItems.length;
    },
    getCartItems() {
      return this.cartItems;
    },
  },
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
      let index = this.cartItems.findIndex((product) => product.id == item.id);
      if (index !== -1) {
        this.products[index].quantity += 1;
        this.singleProduct[index].quantity += 1;
      } else {
        item.quantity = 1;
        this.cartItems.push(item);
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
      this.cartItems = this.cartItems.filter(
        (product) => product.id !== item.id
      );
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
