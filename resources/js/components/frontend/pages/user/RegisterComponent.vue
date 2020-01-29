<template>
  <div class="container">
    <br />
    <div class="row justify-content-center">
      <div class="col-8">
        <div class="card">
          <div class="card-header">Cadastre-se</div>
          <div class="card-body">
            <form class="form" @submit.prevent="register">
              <userform :user='formData' :errors='errors'></userform>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserForm from './UserForm'

export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: ""
      },
      errors: {}
    };
  },
  methods: {
    register() {
      this.$store
        .dispatch("register", this.formData)
        .then(() => {
           this.$router.push({ name: "admin.dashboard" })

           this.$snotify.success('Sucesso ao Cadastrar')
        })
        .catch(response => {
          this.errors = response.errors;
        });
    }
  },
  components: {
    userform: UserForm
  }
};
</script>