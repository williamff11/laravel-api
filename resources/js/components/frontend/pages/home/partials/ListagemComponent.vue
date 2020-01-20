<template>
  <div>
    <search @search="search" />
    <br />
    <div class="row">
      <item v-for="product in products.data" :key="product.id" :item="product" :path="'products'"></item>
    </div>
    <hr />
    <pagination :pagination="products" :offset="products.last_page" @paginate="loadProducts"></pagination>
  </div>
</template>

<script>
import SearchProducts from "./SearchProducts";
import PaginationComponent from "../../../../layouts/PaginationComponent";
import ItemComponent from "../../../../layouts/ItemComponent";

export default {
  data() {
    return {
      filter: "",
      category_id: ''
    };
  },
  created() {
    // if (this.products.data.length == 0)
      this.$store.dispatch("loadProducts", {});

  },
  computed: {
    products() {
      return this.$store.state.products.items;
    },
    params() {
      return {
        filter: this.filter,
        category_id: this.category_id,
        page: this.products.current_page
      };
    }
  },
  methods: {
    loadProducts(page = 1) {
      this.$store.dispatch("loadProducts", { ...this.params, page });
    },
    search(values) {
      this.filter = values.filter;
      this.category_id = values.category_id;
      this.loadProducts();
    }
  },
  components: {
    pagination: PaginationComponent,
    search: SearchProducts,
    item: ItemComponent
  }
};
</script>