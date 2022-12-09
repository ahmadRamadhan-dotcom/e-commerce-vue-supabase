import { defineStore } from "pinia";
import { supabase } from "~/supabase";

export const useProductsStore = defineStore("main", {
  state: () => ({ products: [], error: [], status: [], productLength: null }),
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
  },
});
