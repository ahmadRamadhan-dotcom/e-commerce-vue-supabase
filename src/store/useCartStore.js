import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({ showCart: false }),
  actions: {
    showcart() {
      this.showCart = !this.showCart;
    },
  },
});
