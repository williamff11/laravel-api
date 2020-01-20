<template>
  <div>
    <h1>Carrinho</h1>
    <div class="row">
      <div class="col-12" v-for="product in cart.products" :key="product.id">
        <div class="col-3">
          <div v-if="product.image">
            <img :src="[`/storage/products/${product.image}`]" :alt="product.name" class="img-list" />
          </div>
          <div v-else>
            <img src="/images/noimage.jpg" alt="Produto sem Imagem" class="img-list" />
          </div>
        </div>
        <div class="col-7">
          <p>{{product.name}}</p>
          <button class="btn btn-danger" @click.prevent="removeCart(product)">Remover do Carrinho</button>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  },
  methods: {
    removeCart(product) {
      this.$store.commit("REMOVE_PRODUCT_CART", product);
    }
  }
};
</script>