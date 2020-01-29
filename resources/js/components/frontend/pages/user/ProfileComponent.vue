<template>
  <div class="container">
    <br />
    <div class="row justify-content-center">
      <div class="col-8">
        <div class="card">
          <div class="card-header">Atualizar Perfil</div>
          <div class="card-body">
            <form class="form" @submit.prevent="updateProfile">
              <userform :user="formData" :errors="errors"></userform>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserForm from "./UserForm";

export default {
  computed: {
    formData() {
      return this.$store.state.auth.user;
    }
  },
  data() {
    return {
      errors: {}
    };
  },
  methods: {
    updateProfile() {
      this.$store
        .dispatch("update", this.formData)
        .then(() => {
          this.$router.push({ name: "admin.dashboard" });

          this.$snotify.success("Atualizado com Sucesso");
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