<template>
  <v-layout>
    <v-navigation-drawer
        expand-on-hover
        rail
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
          :items-per-page="students.lenght"
          class="elevation-1"
      >
        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.surname }}</td>
            <td v-for="present in checkPresent(item.isPresent)" :key="present">
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
const chosenGroup = ref([''])
const chosenItem = ref([''])
const headers = ref( [
  {title: 'Фамилия', key: 'fio'}, 
  {title:'Пара1', key: 'Пара1'}, 
  {title:'Пара2', key: 'Пара2'}, 
  {title:'Пара3', key: 'Пара3'},
  {title:'Пара4', key: 'Пара4'},
])
const students = ref( [
  { surname: 'Петров', isPresent: ["Пара1", "Пара2", 'Пара4'] },
])

const checkPresent = (student) => {
  const curHeaders = [...headers.value];
  const curStudent = [...student]
  curHeaders.shift();
  return curHeaders.map(element => {
    if (student.includes(element.key))
      {      
        curStudent.splice(curStudent.indexOf(element.key), 1)
        return true;
      }
    else 
    {
      console.log('adad')
      return false  ;
    }
  });
}

</script>

<style scoped>

</style>