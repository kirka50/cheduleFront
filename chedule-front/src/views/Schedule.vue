<template>
  <v-layout>
    <v-app-bar
      color="blue"
      rounded
      elevation="2"
    >
      <v-app-bar-nav-icon
          @click="router.push('/hub')"
          icon="mdi-hub">

      </v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row justify="center" align="center">
          <v-col
              cols="4"
          >
            <v-card
                title="Расписание"
                subtitle="Модуль расписания"
            >
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup>
import router from "../router";
</script>

<style scoped>

</style>