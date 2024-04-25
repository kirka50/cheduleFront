<template>
  <v-layout>
    <v-navigation-drawer
        expand-on-hover
        rail
        v-model="chosenGroup"
    >
      <v-list density="compact" nav v-model:selected="chosenGroup" @click="chosenItem = ''">
        <v-list-item v-for="group in groups" :title="group.group" :value="group"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer v-if="chosenGroup[0]"
        expand-on-hover
        rail
    >
      <v-list density="compact" nav v-model:selected="chosenItem">
        <v-list-item v-for="item in chosenGroup[0].items" :title="item.item" :value="item.lessons"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main style="height: 250px">
      <v-data-table
          :headers="headers"
          :items="students"
          :items-per-page="5"
          class="elevation-1"
      >
        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.surname }}</td>
            <td v-for="present in item.isPresent" :key="present">
              <v-chip :color="present ? 'green': 'red'">
                {{present  ? 'Был' : 'Не был'}}
              </v-chip>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-main>
  </v-layout>
</template>

<script setup>
import {computed, ref} from "vue";
import groups from  '../services/testData/groups.json'
const chosenGroup = ref('')
const chosenItem = ref('')
const headers = ref( [{title: 'Фамилия', key: 'fio'}, {title:'Пара1'}, {title:'Пара2'}, {title:'Пара3'}])
const students = ref( [
  { surname: 'Иванов', isPresent: [true ,false, true] },
])
</script>

<style scoped>

</style>