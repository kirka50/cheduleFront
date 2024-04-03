<template>
<!--  <div class="login">
    Войти в учётную запись
      <input placeholder="Имя пользователя" v-model="username">
      <input placeholder="Пароль" v-model="password">
      <button :disabled="isInputsAreFilled" @click="handleClick"> Войти </button>
  </div>-->
  <div class="login">
    <v-form v-model="valid" class="w-100" validate-on="input">
      <v-container>
        <v-row justify="center">
          <v-col
              cols="12"
              md="4"
          >
            <v-text-field
                placeholder="Логин"
                v-model="username"
                :rules="userNameRules"
                variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col
              cols="12"
              md="4"
          >
            <v-text-field
                placeholder="Пароль"
                v-model="password"
                :rules="passwordRules"
                variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center"  v-if="errorMassage">
          <v-col
              md="4"
          >
            <v-card
                class="pa-5"
                style="border-color: red;"
                variant="outlined"
            >
              {{errorMassage}}
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col align-self="end"
                 cols="12"
                 md="4"
          >
            <v-btn
                :loading="loading"
                color="blue"
                class="confirm--button"
                block
                @click="handleClick"
                :disabled="isInputsAreFilled"
            >
              Войти
            </v-btn>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col
              class="pa-5 d-flex justify-center align-center"
              md="4"
          >
            Не зарегистрированные ?
            <router-link to="reg"> Зарегистрируйтесь</router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script setup>
import {useUserStore} from "../../store/user/model/userStore";
import {fetchUserLogin} from "../../services/user/fetchUserLogin";
import {computed, ref} from "vue";
import router from "../../router/";
const userStore = useUserStore();
const username = ref('')
const password = ref('')
const valid = ref(false)
const loading = ref(false)
const errorMassage = ref('')
const userNameRules = [
  value => {
      if (value) return true
    return 'Требуется ввести логин'
  },
  value => {
    if (value?.length >= 3) return true;
    return 'Логин должен быть больше 3-х символов';
  },
];
const passwordRules = [
  value => {
    if (value) return true
    return 'Требуется ввести пароль'
  },
  value => {
    if (value?.length >= 3) return true;
    return 'Пароль должен быть больше 3-х символов';
  },
]






function handleClick() {
  loading.value = true
  errorMassage.value = ''
  fetchUserLogin(username.value, password.value)
      .then(
          res => {
            console.log(res)
            if (res.status == 200) {
              userStore.updateToken(res.data.auth_token)
              console.log('sdasda')
              router.push('/me')
            }
            else if (res.response.status === 400) {
              console.log('asd')
              errorMassage.value = res.response.data.non_field_errors[0]
            }

            loading.value = false
          }
      ).catch(
          err => {
            if (err.response.status === 400) {
              console.log('dadadad')
            }
            loading.value = false
            }
      )

}
const isInputsAreFilled = computed(() => {
   return !(username.value.length >= 3 && password.value.length >= 3)
})

</script>

<style lang="scss">
  .login {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }
</style>