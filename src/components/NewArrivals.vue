<script setup>
import { useCatalog } from "../lib/store";
</script>

<template></template>

<script>
import { mapState, mapActions } from "pinia";

export default {
  computed: {
    ...mapState(useCatalog, { newArrivals: "books" }),
  },
  methods: {
    ...mapActions(useCatalog, ["fetchNewArrivals"]),

    addToCart() {
      // TODO: populate this
    },
  },
  created() {
    // this will be invoked when template is created
    this.fetchNewArrivals();
  },
};
</script>
