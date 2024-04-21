<template>
  <div class="h-screen">
    <v-container
        class="d-flex align-start justify-center fill-height"
    >
      <v-row
          justify="center"
      >
        <v-card
            elevation="6"
            prepend-icon="mdi-account"
            width="400"
            min-width="100"
            class="ma-2 pa-2"
            link
            @click="router.push('/me')"
        >
          <template v-slot:title>
            Личный кабинет
          </template>
          <template v-slot:append>
            <v-badge
              color="orange"
              content="4"
              text-color="white"
            >
              <v-avatar
                image="https://randomuser.me/api/portraits/women/85.jpg"
              >
              </v-avatar>
            </v-badge>
          </template>
        </v-card>
        <v-card
            elevation="6"
            prepend-icon="mdi-account"
            width="400"
            min-width="100"
            class="ma-2 pa-2"
            link
            @click="router.push('/journal')"
        >
          <template v-slot:title>
            Электронный журнал
          </template>
        </v-card>
        <v-card
            elevation="6"
            prepend-icon="mdi-account"
            width="400"
            min-width="100"
            class="ma-2 pa-2"
            link
            @click="router.push('/schedule')"
        >
          <template v-slot:title>
            Расписание
          </template>
        </v-card>
      </v-row>

    </v-container>
  </div>

</template>

<script setup>
import router from "../router";
</script>

<style scoped>

</style>