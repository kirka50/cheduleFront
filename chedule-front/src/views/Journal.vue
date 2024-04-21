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
      {{chosenItem ? chosenItem[0].map((lesson) => {return lesson.student_marks}) : ''}}
      <v-data-table
          v-if="chosenItem && chosenGroup"
          :headers="['Фамилия'].concat(chosenItem[0].map((lesson) => {return lesson.lesson_name}))"
      >

      </v-data-table>
    </v-main>
  </v-layout>
</template>

<script setup>
import {ref} from "vue";
import groups from  '../services/testData/groups.json'
const chosenGroup = ref('')
const chosenItem = ref('')
</script>

<style scoped>

</style>