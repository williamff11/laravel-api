<template>
  <div class="col-3">
    <router-link :to="{name: 'product.datail', params: {id: item.id}}">
      <div v-if="item.image">
        <img :src="[`/storage/${path}/${item.image}`]" :alt="item.name" class="img-list" />
      </div>
      <div v-else>
        <img src="/images/noimage.jpg" alt="Produto sem Imagem" class="img-list" />
      </div>
      <p>{{item.name}}</p>
    </router-link>
    <buttonCart :product="item" />
  </div>
</template>

<script>
import ButtonCart from "./ButtonCart";

export default {
  props: ["item", "path"],

  components: { buttonCart: ButtonCart }
};
</script>

<style scoped>

</style>