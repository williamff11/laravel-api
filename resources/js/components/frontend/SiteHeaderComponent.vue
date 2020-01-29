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
    <li class="nav-item dropdown show" v-if="auth.name">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        role="button"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >Olá {{auth.name}}</a>

      <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <router-link :to="{name: 'profile'}" class="dropdown-item" href="#">Meu Perfil</router-link>
        <a class="dropdown-item" @click.prevent="logout">Sair</a>
      </div>
    </li>
    <li class="nav-item" v-else>
      <router-link class="nav-link" :to="{name: 'login'}">Login</router-link>
    </li>
  </ul>
</template> 

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart.products;
    },
    auth() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>