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
    confirmDelete: false,
    id: 0,
    keyword: "",
  }),
  actions: {
    async getProducts() {
      try {
        let { data, error, status } = await supabase
          .from("product")
          .select("*")
          .limit(40)
          .order("id", { ascending: true });
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
    getProductId(id) {
      this.id = id;
    },
  },
});
