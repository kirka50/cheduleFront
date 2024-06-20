<template>
  <v-container class="d-flex flex-wrap ga-2">
        <chedule-card v-for="i in chedule" :day-name="i.day" :date="i.date" :chedule-list="i.cheduleList">
        </chedule-card>
  </v-container>
</template>

<script>
import cheduleList from "../../services/testData/cheduleList.js";
import cheduleCard from "./CheduleCard.vue";
export default {

  name: "PersonalSchedule",
  components: {cheduleCard},
  data() {
    return {
      chedule: cheduleList
    }
  }

}
</script>

<style scoped>

</style>