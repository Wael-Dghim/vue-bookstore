import { defineStore } from "pinia";

export const useCatalog = defineStore("catalog-store", {
  state: () => ({ newArrivals: [], fetching: false }),
  getters: {
    books(state) {
      return state.newArrivals;
    },
    isFetching(state) {
      return state.fetching;
    },
  },

  actions: {
    async fetchNewArrivals() {
      this.fetching = true;
      const res = await fetch(import.meta.env.VITE_API_URL);
      try {
        const data = await res.json();
        this.newArrivals = data;
      } catch (error) {
        console.log("Error loading data", error);
        return err;
      }
      this.fetching = false;
    },
  },
});
