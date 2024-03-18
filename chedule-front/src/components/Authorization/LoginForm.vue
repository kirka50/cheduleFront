<template>
  Войти в учётную запись
  <input placeholder="Имя пользователя" v-model="username">
  <input placeholder="Пароль" v-model="password">
  <button @click="handleClick"> Войти</button>
  <div v-if="errorMassage">{{errorMassage}}</div>
</template>

<script setup>
import {useUserStore} from "../../store/user/model/userStore";
import {fetchUserLogin} from "../../store/user/model/fetchUserLogin";
import {ref} from "vue";
const userStore = useUserStore();
const username = ref('')
const password = ref('')
const errorMassage = ref('')
function handleClick() {
  console.log(username.value, password.value)
  fetchUserLogin(username.value, password.value)
      .then(
          res => {
            userStore.updateToken(res.auth_token)
            console.log(userStore.user.userToken)
          }
      ).catch(
          err => {
            console.log(err)
          }
  )

}

</script>

<style scoped>

</style>