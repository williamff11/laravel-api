<template>
  <div>
    <h1>{{product.name}}</h1>
    <div v-if="product.image">
      <img :src="[`/storage/products/${product.image}`]" :alt="product.name" class="img-list" />
    </div>
    <div v-else>
      <img src="/images/noimage.jpg" alt="Produto sem Imagem" class="img-list" />
    </div>
    <div>
        {{product.description}}
    </div>
    <div>
     <b>Data de Criação:</b> {{product.created_at}}
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],

  created() {
    this.loadProduct();
  },
  data() {
    return {
      product: {}
    };
  },
  methods: {
    loadProduct(id) {
      this.$store
        .dispatch("loadProduct", this.id)
        .then(product => (this.product = product))
        .catch(error => console.log(error));
    }
  }
};
</script>