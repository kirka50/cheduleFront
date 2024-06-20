<template>
  <v-container class="flex-column d-flex ga-2 flex-wrap">
    <v-card class="d-flex flex-column flex-lg-grow-1 flex-md-grow-1">
      <v-card-title> Персональные данные </v-card-title>
      <v-divider/>
      <v-container class="ga-2 d-flex flex-column">
          <v-img height="200" width="100" src="https://randomuser.me/api/portraits/women/85.jpg" ></v-img>
        <v-text-field v-model="testData.birthDate" variant="outlined" hide-details="auto" label="Дата рождения" clearable></v-text-field>
        Пол
        <v-select v-model="testData.studentGender" variant="outlined" :items="['Мужской','Женский']"></v-select>

        Контактные данные
        <v-divider></v-divider>
        <v-text-field v-model="testData.studentArdress" variant="outlined" hide-details="auto" label="Адрес проживания" clearable></v-text-field>
        <v-text-field v-model="testData.studentPhone" variant="outlined" hide-details="auto" label="Номер телефона" clearable></v-text-field>
        <v-switch v-model="testData.studentNation" variant="outlined" hide-details="auto" label="Резидент Казахстана" clearable></v-switch>
        <v-text-field v-model="testData.studentEmail" variant="outlined" hide-details="auto" label="Email" clearable></v-text-field>
        <v-text-field v-model="testData.studentTg" variant="outlined" hide-details="auto" label="Telegram" clearable></v-text-field>
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
      <v-container class="">
        <v-row>
          <v-col>
            <v-text-field class="flex-row" v-model="testData.studentGroup" variant="outlined" hide-details="auto" label="Группа" clearable></v-text-field>
            <v-divider class="hidden-md-and-up"></v-divider>
          </v-col>
          <v-col>
            <v-text-field class="flex-row" v-model="testData.studentGroup" variant="outlined" hide-details="auto" label="Группа" clearable></v-text-field>
            <v-divider class="hidden-md-and-up"></v-divider>
          </v-col>
          <v-col>
            <v-text-field v-model="testData.studentFac" variant="outlined" hide-details="auto" label="Факультет" clearable></v-text-field>
            <v-divider class="hidden-md-and-up"></v-divider>
          </v-col>
          <v-col>
            <v-text-field v-model="testData.studentNaprav" variant="outlined" hide-details="auto" label="Направление" clearable></v-text-field>
            <v-divider class="hidden-md-and-up"></v-divider>
          </v-col>
          <v-col>
            <v-text-field v-model="testData.studentKaf" variant="outlined" hide-details="auto" label="Кафедра" clearable></v-text-field>
          </v-col>

        </v-row>
        <v-row>
          <v-col>
            <v-switch v-model="testData.studentNation" variant="outlined" hide-details="auto" label="Иногородный студент" clearable></v-switch>
          </v-col>
          <v-col>
            <v-switch v-model="testData.studentNation" variant="outlined" hide-details="auto" label="Общажник" clearable></v-switch>
          </v-col>
          <v-col>
            <v-radio-group inline>
              <v-radio label="Бюджетник" value="one"></v-radio>
              <v-radio label="Платник" value="two"></v-radio>
              <v-radio label="Целевик" value="three"></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>

      </v-container>
    </v-card>
    <v-card class="d-flex flex-column flex-lg-grow-1 flex-md-1-0-100">
      <v-card-title> Данные об образовании</v-card-title>
      <v-divider/>
      <v-container class="ga-2 d-flex flex-column flex-md-row flex-lg-row flex-wrap">
        <v-text-field class="flex-row" v-model="testData.studentGroup" variant="outlined" hide-details="auto" label="Школа" clearable></v-text-field>
        <v-divider class="hidden-md-and-up"></v-divider>
        <v-text-field class="flex-row" v-model="testData.studentGroup" variant="outlined" hide-details="auto" label="Балл ЕГЭ" clearable></v-text-field>
        <v-divider class="hidden-md-and-up"></v-divider>
        <v-text-field class="flex-row" v-model="testData.studentGroup" variant="outlined" hide-details="auto" label="Медалист" clearable></v-text-field>
        <v-divider class="hidden-md-and-up"></v-divider>
        <v-text-field class="flex-row" v-model="testData.studentGroup" variant="outlined" hide-details="auto" label="Кушал с утра ?" clearable></v-text-field>
        <v-divider class="hidden-md-and-up"></v-divider>
      </v-container>
      <v-divider></v-divider>
      <v-container>
        kj[
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
  studentPhone: '89827352131',
  studentNation: true,
  studentEmail: 'reznickov.k@yandex.ru',
  studentTg: 'Kai_kane'
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