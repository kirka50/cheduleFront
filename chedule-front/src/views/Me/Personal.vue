<template>
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
</template>

<script setup>
import {onBeforeMount, ref} from "vue";
import {makeRequest} from "../../api/makeRequest";
import router from "../../router/index";
import {useUserStore} from "../../store/user/model/userStore";
const userStore = useUserStore();



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

<style scoped>

</style>