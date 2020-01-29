<template>
  <div>
    <div :class="['form-group', {'has-error': errors.name}]">
      <div v-if="errors.name">{{ errors.name[0] }}</div>
      <input type="text" v-model="user.name" class="form-control" placeholder="Nome" />
    </div>
    <div :class="['form-group', {'has-error': errors.email}]">
      <div v-if="errors.email">{{ errors.email[0] }}</div>
      <input type="email" v-model="user.email" class="form-control" placeholder="Email" />
    </div>
    <div :class="['form-group', {'has-error': errors.password}]">
      <div v-if="errors.password">{{ errors.password[0] }}</div>
      <input
        type="password"
        v-model="user.password"
        class="form-control"
        placeholder="password"
      />
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-success">Enviar</button>
    </div>
  </div>
</template>

<script>
export default {
    props: ['user', 'errors']
}
</script>