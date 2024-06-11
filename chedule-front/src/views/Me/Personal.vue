<template>
  <v-container class="flex-column d-flex ga-2 flex-wrap">
    <v-card class="d-flex flex-column flex-lg-grow-1 flex-md-grow-1">
      <v-card-title> Персональные данные </v-card-title>
      <v-divider/>
      <v-container class="ga-2 d-flex flex-column">
        <v-text-field v-model="testData.userName" variant="outlined" hide-details="auto" label="ФИО"></v-text-field>
        <v-divider></v-divider>
        <v-text-field v-model="testData.birthDate" variant="outlined" hide-details="auto" label="Дата рождения" clearable></v-text-field>
        <v-divider></v-divider>
        Пол
        <v-select v-model="testData.studentGender" variant="outlined" :items="['Мужской','Женский']"></v-select>
        <v-divider></v-divider>
        <v-text-field v-model="testData.studentArdress" variant="outlined" hide-details="auto" label="Адресс проживания" clearable></v-text-field>
        <v-divider></v-divider>
        <v-text-field v-model="testData.studentPhone" variant="outlined" hide-details="auto" label="Номер телефона" clearable></v-text-field>
      </v-container>
    </v-card>
    <v-card class="d-flex flex-column flex-lg-grow-1 flex-md-grow-1">
      <v-card-title> Данные об родственниках </v-card-title>
      <v-divider/>
      <v-container class="ga-2 d-flex flex-column">
        <v-text-field v-model="testData.motherName" variant="outlined" hide-details="auto" label="ФИО" clearable></v-text-field>
        <v-text-field v-model="testData.motherPhone" variant="outlined" hide-details="auto" label="Номер телефона" clearable></v-text-field>
        <v-divider/>
        <v-icon icon="mdi-plus"></v-icon>
      </v-container>
    </v-card>
    <v-card class="d-flex flex-column flex-lg-grow-1 flex-md-1-0-100">
      <v-card-title> Студенческие данные </v-card-title>
      <v-divider/>
      <v-container class="ga-2 d-flex flex-column flex-md-row flex-lg-row flex-wrap">
        <v-text-field class="flex-row" v-model="testData.studentGroup" variant="outlined" hide-details="auto" label="Группа" clearable></v-text-field>
        <v-divider class="hidden-md-and-up"></v-divider>
        <v-text-field v-model="testData.studentFac" variant="outlined" hide-details="auto" label="Факультет" clearable></v-text-field>
        <v-divider class="hidden-md-and-up"></v-divider>
        <v-text-field v-model="testData.studentNaprav" variant="outlined" hide-details="auto" label="Направление" clearable></v-text-field>
        <v-divider  class="hidden-md-and-up"></v-divider>
        <v-text-field v-model="testData.studentKaf" variant="outlined" hide-details="auto" label="Кафедра" clearable></v-text-field>
      </v-container>
      <v-container>

      </v-container>
    </v-card>
  </v-container>
</template>

<script setup>
import {onBeforeMount, ref} from "vue";
import {makeRequest} from "../../api/makeRequest";
import router from "../../router/index";
import {useUserStore} from "../../store/user/model/userStore";
const userStore = useUserStore();


const testData = ref({
  userName: 'Студент Студентович Студентов',
  studentGender: 'Мужской',
  birthDate: '18.03.2002',
  motherName: 'Елена Родитель Родителевич',
  motherPhone: '89820002211',
  studentGroup: 'ПЕ-01б',
  studentFac: 'ИИиУ',
  studentNaprav: '09.03.01',
  studentKaf: 'ИСТ',
  studentArdress: 'г. Екатеринбург, Театральная 2/1 кв. 98',
  studentPhone: '89827352131'
})
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