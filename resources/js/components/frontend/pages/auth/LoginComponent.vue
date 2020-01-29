<template>
  <div class="container">
    <br />
    <div class="row justify-content-center">
      <div class="col-8">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
            <form class="form" @submit.prevent="login">
              <div class="form-group">
                <input
                  type="email"
                  v-model="formData.email"
                  class="form-control"
                  placeholder="E-mail"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  v-model="formData.password"
                  class="form-control"
                  placeholder="Senha"
                />
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-success">Entrar</button>
                <router-link :to="{name: 'register'}">Não tem Cadastro? Registre-se</router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: "",
        password: ""
      }
    };
  },

  methods: {
    login() {
      this.$store.dispatch("login", this.formData)
                  .then(() => this.$router.push({name: 'admin.dashboard'}))
                  .catch(() => {
                    this.$snotify.error('Dados Inválidos', 'Falha ao Acessar')
                  })
    }
  }
};
</script>