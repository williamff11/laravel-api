 <template>
  <ul class="nav bg-dark">
    <li class="nav-item">
      <router-link class="nav-link" :to="{name: 'home'}">Home</router-link>
    </li>
    <li>
      <router-link class="nav-link" :to="{name: 'contact'}">Contato</router-link>
    </li>
    <li>
      <router-link class="nav-link" :to="{name: 'cart'}">Carrinho ({{ cart.length }})</router-link>
    </li>
    <li>
      <router-link class="nav-link" :to="{name: 'login'}">Login</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    cart () {
      return this.$store.state.cart.products
    }
  }
}
</script>