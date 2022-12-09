import { defineStore } from "pinia";
import { supabase } from "~/supabase";

export const useProductsStore = defineStore("main", {
  state: () => ({
    products: [],
    singleProduct: {},
    ImageUrl: String,
    error: [],
    status: [],
    productLength: null,
    id: 0,
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
    getProductId(id) {
      this.id = id;
    },
  },
});
