<template>
  <!--  <div class="login">
      Войти в учётную запись
        <input placeholder="Имя пользователя" v-model="username">
        <input placeholder="Пароль" v-model="password">
        <button :disabled="isInputsAreFilled" @click="handleClick"> Войти </button>
    </div>-->
  <div class="reg">
    <v-form v-model="valid" class="w-100">
      <v-container>
        <v-row justify="center">
          <v-col
              cols="12"
              md="4"
          >
            <v-text-field
                placeholder="Email"
                v-model="email"
                :rules="emailRules"
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
                placeholder="Логин"
                v-model="username"
                :rules="[...userNameRules, userNameError]"
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
        <v-row justify="center">
          <v-col align-self="end"
                 cols="12"
                 md="4"
          >
            <v-btn
                type="submit"
                :loading="loading"
                color="blue"
                class="confirm--button"
                block
                @click="handleClick"
                :disabled="isInputsAreFilled"
            >
              Зарегистрироваться
            </v-btn>
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
import {fetchUserReg} from "../../services/user/fetchUserReg";
const userStore = useUserStore();
const email = ref('')
const username = ref('')
const password = ref('')
const valid = ref(false)
const loading = ref(false)
const userNameError = ref(true)
const userNameRules = ref([
  value => {
    if (value) return true
    return 'Требуется ввести логин'
  },
  value => {
    if (value?.length >= 3) return true;
    return 'Логин должен быть больше 3-х символов';
  },
]);
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

const emailRules = [
  value => {
    if (value) return true
    return 'Требуется ввести почту'
  },
  value => {
    const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if (regex.test(value)) return true;
    return 'Неверный формат почты';
  },
]


async function loginUser(username, password) {
  await fetchUserLogin(username, password)
      .then(
          res => {
            console.log(res)
            if (res.status === 200) {
              userStore.updateToken(res.data.auth_token)
              console.log('sdasda')
              router.push('/me')
            }
          }
      ).catch(
      err => {
        if (err.response.status === 400) {
          console.log('dadadad')
        }
      }
  )
}

async function handleClick(event) {
  event.preventDefault();
  loading.value = true;
  await fetchUserReg(username.value, password.value, email.value)
      .then(
          res => {
            if (res.response.status === 400) {
              userNameError.value = 'jopa'
            } else if (res.status === 200) {
              loginUser(username.value, password.value)
            }
            loading.value = false
          }
      ).catch(
      err => {
        console.log(err)
        loading.value = false
      }
  )

}
const isEmailValid = () => {
  const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  if (regex.test(email.value)) return true;
}
const isInputsAreFilled = computed(() => {
  return !(username.value.length >= 3 && password.value.length >= 3 && isEmailValid())
})

</script>

<style lang="scss">
.reg {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
</style>