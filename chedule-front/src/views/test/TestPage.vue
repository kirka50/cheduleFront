<template>
  <v-layout>
    <v-list>
      <RecursiveList @update-title="updateTitle" :items="testList"></RecursiveList>
    </v-list>
    <v-main>
        <v-layout class="fill-height ma-1">
          <v-main>
            <v-card :title="tableTitle" class="fill-height ma-1">
              <v-data-table
                  :headers="headers"
                  :items="students"
              >
                <template v-slot:item="{ item }"
                >
                  <tr>
                    <td> {{ item.studentName }}</td>
                    <td v-for="lesson in studentPresent(headers, item.lessons)">
                      <v-chip v-if="lesson.lessonKey" :color="lesson.isPresent == null ? 'grey-darken-3': lesson.isPresent ? 'green' : 'red'">
                        {{lesson.lessonMark}}
                      </v-chip>
                      <v-chip v-else color="red">
                        Не отмчн
                      </v-chip>
                    </td>
                  </tr>
                </template>
              </v-data-table>
                <div class="d-flex flex-column pa-6">
                  <v-btn-toggle
                      v-model="test"
                      divided
                  >
                    <v-btn text="Лекции"></v-btn>
                    <v-btn text="Практики"></v-btn>
                    <v-btn text="Лабы"></v-btn>
                  </v-btn-toggle>
                </div>
            </v-card>
          </v-main>
        </v-layout>
    </v-main>
  </v-layout>
</template>

<script lang="ts">
import RecursiveList from "../../components/Journal/RecursiveList.vue";
import testList from '../../services/testData/testlist.js'

type LessonMarks = 2 | 3 | 4 | 5;

interface Student {
  studentName: string;
  lessons: [{ lessonKey: string, isPresent: boolean | null, lessonMark: LessonMarks }]
}

export default {
  name: "TestPage",
  components: {RecursiveList},
  methods: {
    updateTitle(newTitle) {
      this.tablePath = newTitle.split('_')
    },
    studentPresent([...headers],studentLessons) {
      headers.shift()
      return headers.map( (lesson) => {
        for ( const studentLesson of studentLessons) {
          if (lesson.key.includes(studentLesson.lessonKey)) return studentLesson
        }
        return {lessonKey: null, isPresent: false, lessonMark: null}
      })
    }
  },
  data() {
    return {
      tablePath: [],
      selectedTable: {},
      avainableSemestrs: [{title:'Первый семестр', value: '1s'}, {title:'Второй семестр', value: '2s'}],
      testList: testList,
      tableTitle: 'Математика практики',
      headers: [{title: 'Фамилия', key: 'fio'}, {title: 'Комплексные числа', key: 'Пара1'},
        {title: 'Числа Фибоначи', key: 'Пара2'},
        {title: 'Мэпл', key: 'Пара3'}],
      students: [
        {
          studentName: 'Кирилл Резников', lessons: [
            {lessonKey: 'Пара1', isPresent: true, lessonMark: 5},
            {lessonKey: 'Пара2', isPresent: null, lessonMark: 3},
            {lessonKey: 'Пара3', isPresent: null, lessonMark: 2}]
        },
        {
          studentName: 'Кирилл Брагин', lessons: [
            {lessonKey: 'Пара1', isPresent: true, lessonMark: 4},
            {lessonKey: 'Пара2', isPresent: false, lessonMark: 3},
            {lessonKey: 'Пара3', isPresent: true, lessonMark: 5}]
        },
        {
          studentName: 'Ярослав Колташев', lessons: [
            {lessonKey: 'Пара1', isPresent: null, lessonMark: 5},
            {lessonKey: 'Пара2', isPresent: false, lessonMark: 3},
            {lessonKey: 'Пара3', isPresent: null, lessonMark: 5}]
        },
        {
          studentName: 'Савелий Капустин', lessons: [
            {lessonKey: 'Пара1', isPresent: true, lessonMark: 5},
            {lessonKey: 'Пара2', isPresent: true, lessonMark: 5},
            {lessonKey: 'Пара3', isPresent: true, lessonMark: 5}]
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>