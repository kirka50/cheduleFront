<template>
  <v-layout>
    <v-list>
      <RecursiveList @update-title="updateTitle" :items="testList"></RecursiveList>
    </v-list>
    <v-main>
        <v-layout class="fill-height ma-1">
          <v-main>
            <v-card :title="getTableTitle" class="fill-height ma-1">
<!--              <v-data-table
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
              </v-data-table>-->
              <v-data-table
                  v-if="getTableFromType"
                  :headers="getTableFromType.headers"
                  :items="getTableFromType.students"

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
              <v-card v-else>
                Нету таблички то :(
              </v-card>
                <div v-if="getTablesTypes" class="d-flex flex-column pa-6">
                  <v-btn-toggle
                      v-model="selectedTableType"
                      divided
                  >
                    <v-btn v-for="i in getTablesTypes" :text="i" :value="i">
                    </v-btn>
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
import tablesData from '../../services/testData/journalsTables.js'

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
      this.tablePath = newTitle
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
  computed: {
    getSelectedTables() {
      for (const table of this.tablesData) {
        if (this.tablePath == table.tablePath) {
          console.log('true')
          return table
        }
      }
      return false
    },
    getTablesTypes() {
      return this.getSelectedTables ? this.getSelectedTables.lessonTables.map(lesson => lesson.lessonType) : ['']
    },
    getTableFromType() {
      try {
        for (const table of this.getSelectedTables.lessonTables) {
          console.log(table.lessonType == this.selectedTableType, table.lessonType, this.selectedTableType)
          if (table.lessonType == this.selectedTableType) {
            return table
          }
        } return  false
      }
      catch (err) {
        return  false
      }
    },
    getTableTitle() {
      return this.getSelectedTables && this.getTableFromType
          ? this.getSelectedTables.lessonName + ` ${this.getTableFromType.lessonType}`
          : this.getSelectedTables ? this.getSelectedTables.lessonName : ''
    }
  },
  data() {
    return {
      tablePath: [],
      selectedTableType: this.getTablesTypes,
      tablesData: tablesData,
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