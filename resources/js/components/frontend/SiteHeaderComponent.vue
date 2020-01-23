 <template>
  <ul class="nav bg-dark">
    <li class="nav-item">
      <router-link class="nav-link" :to="{name: 'home'}">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{name: 'contact'}">Contato</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{name: 'cart'}">Carrinho ({{ cart.length }})</router-link>
    </li>
    <li class="nav-item" v-if="auth.name">
      <router-link class="nav-link" :to="{name: 'admin.dashboard'}">Olá, {{auth.name}}</router-link>
    </li>
    <li class="nav-item" v-else>
      <router-link class="nav-link" :to="{name: 'login'}">Login</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    cart () {
      return this.$store.state.cart.products
    },
    auth () {
      return this.$store.state.auth.user
    }
  }
}
</script>