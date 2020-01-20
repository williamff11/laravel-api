<template>
  <div>
    <div v-if="notCart">
      <button class="btn btn-info" @click.prevent="addCart">Adicionar ao Carrinho</button>
    </div>
    <div v-else>
      <button class="btn btn-danger" @click.prevent="removeCart">Remover do Carrinho</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  computed: {
    notCart() {
      return this.$store.state.cart.products.indexOf(this.product) < 0;
    }
  },
  methods: {
    addCart() {
      this.$store.commit("ADD_PRODUCT_CART", this.product);

      this.saveProducts()
    },
    removeCart() {
      this.$store.commit("REMOVE_PRODUCT_CART", this.product);
    },
    saveProducts() {
      const parsed = JSON.stringify(this.$store.state.cart.products);
      localStorage.setItem("product", parsed);
    }
  }
};
</script>

<style scoped>
</style>