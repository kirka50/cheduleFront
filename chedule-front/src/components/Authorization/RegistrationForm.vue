<template>
  Зарегистрироваться
  <form>
    <input placeholder="Email" v-model="email">
    <input placeholder="Логин" v-model="login">
    <input placeholder="Пароль" v-model="password">
    <button>Зарегистрироваться</button>
  </form>
</template>

<script>
export default {
  name: "RegistrationForm",
  data() {
    return {
      email: '',
      login: '',
      password: ''
    }
  },
}
</script>

<style scoped>

</style>