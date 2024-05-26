<template>
  <v-card>
    <v-card-title class="bg-blue-lighten-1">{{dayName}}</v-card-title>
    <v-card-subtitle>{{date}}</v-card-subtitle>
    <v-card-item>
      <v-list class="ga-">
        <v-list-item v-for="i in 7" prepend-icon="mdi-circle-small">
          {{i}} пара - {{getLessonNameOrEmpty(i, cheduleList)}}
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
        console.log(lesson)
        if (lesson.lessonPlace == place) return lesson.lessonName
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
        return [{lessonPlace: 1, lessonName: ''}]
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