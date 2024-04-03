<template>
  <div class="container">
    <div class="user--account ">
        <v-layout>
          <v-navigation-drawer
              expand-on-hover
              rail
              location="left"
              permanent
          >
            <v-list density="comfortable">
              <v-list-item
                  prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                  subtitle="Личный кабинет"
                  title="Студент Студентович"
              ></v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list>
              <v-list-item
                  class="cursor-pointer"
                  title="Hub"
                  prepend-icon="mdi-hub"
                  v-ripple
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
                      @click="changeLocation(item.page)"
                      :active="isPageSelected(item.page)"></v-list-item>
<!--                  <v-list-item prepend-icon="mdi-calendar-range" title="Расписание" value="schedule" :active="'schedule'== page"></v-list-item>
                  <v-list-item prepend-icon="mdi-book-account" title="Зачётка" value="record" :active="'record'== page"></v-list-item>
                  <v-list-item prepend-icon="mdi-briefcase" title="Портфолио" value="jobs" :active="'jobs'== page"></v-list-item>-->
              </v-list>
          </v-navigation-drawer>
          <v-main>
            <router-view>

            </router-view>
          </v-main>
        </v-layout>

    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
const page = ref(['personal'])
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
    description: 'Зачётка',
    icon: 'mdi-book-account'
  },
  {
    page: 'jobs',
    description: 'Портфолио',
    icon: 'mdi-briefcase'
  },
])
function changeLocation(page) {
  console.log(page)
}

const isPageSelected = ((currentPage)=> {
  return currentPage == page.value;
})



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