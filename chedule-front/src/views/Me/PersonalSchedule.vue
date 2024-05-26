<template>
  <v-container class="d-flex flex-wrap ga-2">

        <chedule-card day-name="Понедельник" date="26.05" :chedule-list="chedule">

        </chedule-card>
        <chedule-card day-name="Вторник" date="27.05" :chedule-list="[{lessonPlace: 1, lessonName:'Физика'},
        {lessonPlace: 3, lessonName:'Математика (Практика)'},{lessonPlace: 4, lessonName:'Экономика'}]">

        </chedule-card>

  </v-container>
</template>

<script>
import cheduleCard from "./CheduleCard.vue";
export default {

  name: "PersonalSchedule",
  components: {cheduleCard},
  data() {
    return {
      chedule: [{lessonPlace: 1, lessonName:'Математика'},{lessonPlace: 7, lessonName:'Окно большое'}]
    }
  }

}
</script>

<style scoped>

</style>