<template>
  <div class="container">
    <div class="user--account">
        <v-layout class="fill-height  overflow-auto">

          <v-navigation-drawer
              expand-on-hover
              location="left"
              v-model="drawer"
          >
            <v-list density="comfortable" v-model:selected="page">
              <v-list-item
                  prepend-icon="mdi-account"
                  subtitle="Личный кабинет"
                  :title="userStore.getUser.userFirstName"
                  @click="changeLocation('')"
                  :active="isPageSelected('')"
                  value=''
              ></v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list>
              <v-list-item
                  class="cursor-pointer"
                  title="Hub"
                  prepend-icon="mdi-hub"
                  v-ripple
                  @click="router.push('/hub')"
              >
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
              <v-list density="comfortable" v-model:selected="page">
                  <v-list-item
                      v-for="item in pages"
                      :prepend-icon="item.icon"
                      :title="item.description"
                      :value="item.page"
                      @click="changeLocation('/'+item.page)"
                      :active="isPageSelected(item.page)"></v-list-item>
              </v-list>
            <v-divider></v-divider>
            <v-list>
              <v-list-item
                  class="cursor-pointer"
                  title="Выйти"
                  prepend-icon="mdi-logout"
                  v-ripple
                  @click="logout()"
              >
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
          <v-main>
            <v-app-bar disabled="true" >
              <v-app-bar-nav-icon @click="drawer = !drawer" icon="mdi-menu"></v-app-bar-nav-icon>
              {{}}
            </v-app-bar>
            <router-view>
            </router-view>
          </v-main>
        </v-layout>
    </div>
  </div>
</template>

<script setup>
import {computed, onBeforeMount, onBeforeUpdate, ref} from "vue";
import router from "../router";
import {useRoute} from "vue-router";
import {useUserStore} from "../store/user/model/userStore";
import {faker} from "@faker-js/faker";

const drawer = ref(false);
const userStore = useUserStore();
const route = useRoute();
const page = ref(['']);
const pages = ref([
  {
    page: 'personal',
    description: 'Мои данные',
    icon: 'mdi-account-school'
  },
  {
    page: 'schedule',
    description: 'Расписание',
    icon: 'mdi-calendar-range'
  },
  {
    page: 'record',
    description: 'Успеваемость',
    icon: 'mdi-book-account'
  },
  {
    page: 'jobs',
    description: 'Портфолио',
    icon: 'mdi-briefcase'
  },
]);

function getCurrentLocation(){
  return router.currentRoute.value.path.split('/')[2]
}

onBeforeMount(() => {
  console.log(route)
  page.value = [getCurrentLocation()]
});
function changeLocation(page) {
  router.push({
      path: `/me${page}/`,
      state: {page: page.value}
});
}

function logout() {
  router.push('/auth/login')
  userStore.removeUser()
}

const isPageSelected = ((currentPage)=> {
  return currentPage == page.value;
});





</script>

<style scoped lang="scss">
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;

  .asd {
    padding: 5px;
  }
  .header{
    padding: 5px;
    background-color: #EEF5F8;
  }
  .user--account {
    background-color: #F8F8F8;
    height: 100%;
  }
}
</style>