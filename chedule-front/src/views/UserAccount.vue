<template>
  <div>
    <div class="header pa-5 bg-blue-accent-3 rounded-be-shaped">
      <v-container>
        <v-row>
          Личный кабинет
        </v-row>
      </v-container>
    </div>
    <div class="user--account ">
      <v-container>
        <v-row>
          <v-col>
            <v-card
                variant="tonal"
                class="asd"
                :loading="!userMail"
                title="Ваша почта"
                :text="userMail"
            >
            </v-card>
          </v-col>
          <v-col>
            <v-card
                variant="tonal"
                class="asd"
                :loading="!userId"
                title="Ваш userID"
                :text="userId"
            >
            </v-card>
          </v-col>
          <v-col>
            <v-card
                variant="tonal"
                class="asd"
                :loading="!username"
                title="Ваш логин"
                :text="username"
            >
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script setup>
import router from "../router/";

const userStore = useUserStore();
import {makeRequest} from "../api/makeRequest";
import {useUserStore} from "../store/user/model/userStore";
import {onBeforeMount, ref} from "vue";
const userMail = ref('')
const userId = ref('')
const username = ref('')
onBeforeMount(() => {
  makeRequest(
      {
        method: "GET",
        url: 'auth/users/me/',
        headers: {
          Authorization: `Token ${userStore.user.userToken}`
        }
      }
  ).then(
      res => {
        console.log(res)
        userMail.value = res.data.email;
        userId.value = res.data.id;
        username.value = res.data.username;
      }
  ).catch(
      err => {
        userStore.removeUser()
        router.push('/auth/login')
      }
  )
})
</script>

<style scoped lang="scss">
  .asd {
    padding: 5px;
  }
</style>