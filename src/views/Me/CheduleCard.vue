<template>
  <v-card>
    <v-card-title class="bg-blue-lighten-1">{{dayName}}</v-card-title>
    <v-card-subtitle>{{date}}</v-card-subtitle>
    <v-card-item>
      <v-list class="ga-1">
        <v-list-item v-for="i in 7" prepend-icon="mdi-circle-small">
          <v-tooltip :text="getLessonNameOrEmpty(i, cheduleList).hint" v-if="getLessonNameOrEmpty(i, cheduleList).hint">
            <template v-slot:activator="{ props }">
              <span v-bind="props">{{i}} пара - {{getLessonNameOrEmpty(i, cheduleList).lessonName}}</span>
            </template>
          </v-tooltip>
          <template v-else>
            {{i}} пара - {{getLessonNameOrEmpty(i, cheduleList).lessonName}}
          </template>
        </v-list-item>
      </v-list>
    </v-card-item>
  </v-card>
</template>

<script>
export default {
  name: "CheduleCard",

  methods: {
    getLessonNameOrEmpty(place, lessonsArray) {
      for (const lesson of lessonsArray) {
        if (lesson.lessonPlace === place) return lesson
      } return ''
    }
  },
  computed: {

  },
  props: {
    dayName: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    cheduleList: {
      type: Array,
      default() {
        return [{lessonPlace: 1, lessonName: '', hint:''}]
      },
      required: true
    }
  },
  data() {
    return{

    }
  }
}
</script>

<style scoped>

</style>