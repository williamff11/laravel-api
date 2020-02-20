<template>
  <div>
    <ul class="nav bg-dark">
      <li class="nav-item">
        <router-link class="nav-link" :to="{name: 'admin.dashboard'}">Dashboard</router-link>
      </li>
      <li>
        <router-link
          class="nav-link"
          :to="{name: 'admin.categories'}"
        >Categorias ({{totalCategories}})</router-link>
      </li>
      <li>
        <router-link class="nav-link" :to="{name: 'admin.products'}">Produtos</router-link>
      </li>
      <li>
        <router-link class="nav-link" :to="{name: 'products.reports'}">Gráficos</router-link>
      </li>
      <li class="nav-item dropdown show" v-if="user.name">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >Olá {{user.name}}</a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <router-link :to="{name: 'profile'}" class="dropdown-item" href="#">Meu Perfil</router-link>
          <a class="dropdown-item" @click.prevent="logout">Sair</a>
        </div>
      </li>
    </ul>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    totalCategories() {
      return this.$store.state.categories.items.data.length;
    },
    user() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");

      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style scoped>
</style>