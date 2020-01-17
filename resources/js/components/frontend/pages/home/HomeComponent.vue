<template>
  <div>
    <h2>Sou a Home Page</h2>
  </div>
</template>

<script>
export default {
  created() {
    if (this.products.data.length == 0)
      this.$store.dispatch('loadProducts', {});
  },
  computed: {
    products() {
      return this.$store.state.products.items;
    }
  }
};
</script>