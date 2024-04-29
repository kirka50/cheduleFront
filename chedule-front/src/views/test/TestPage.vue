<template>
  <v-layout>
    <v-list><recursive-list :title-list="testTitle" @updateTitle="updateTitle" :items="testList"/></v-list>



    <v-main>
      <v-container>
        <v-data-table
            :headers="headers"
            :items="students"
        >
          <template v-slot:item="{ item }"
          >
            <tr>
              <td> {{ item.studentName }}</td>
              <td v-for="studentPerf in item.lessons">
                <v-chip :color="studentPerf.isPresent == null ? 'gray': studentPerf.isPresent ? 'green' : 'red'">
                  {{ studentPerf.lessonMark }}
                </v-chip>
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-container>
      {{testTitle}}
    </v-main>
  </v-layout>
</template>

<script lang="ts">
import RecursiveList from "../../components/Journal/RecursiveList.vue";
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
      this.testTitle = newTitle
    }
  },
  data() {
    return {
      testTitle: [],
      testList: [
        {title: 'Первый семестр',
          value: [
            {
              title: '09.02.01',
              value: [
                {
                  title: 'Курс 1',
                  value: [
                    {
                      title: 'ПЕ-11',
                      value: [
                        {
                          title: 'Математика',
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {title: 'Второй семестр',
          value: [
            {
              title: '09.02.02',
              value: [
                {
                  title: 'Курс 1',
                  value: [
                    {
                      title: 'ПЕ-11',
                      value: [
                        {
                          title: 'Физика',
                        }
                      ]
                    }
                  ]
                },
                {
                  title: 'Курс 2',
                  value: [
                    {
                      title: 'ПЕ-11',
                      value: [
                        {
                          title: 'Геометрия',
                        }
                      ]
                    }
                  ]
                },
                {
                  title: 'Курс 3',
                  value: [
                    {
                      title: 'ПЕ-11',
                      value: [
                        {
                          title: 'Математика',
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      headers: [{title: 'Фамилия', key: 'fio'}, {title: 'Комплексные числа', key: 'Пара1'},
        {title: 'Числа Фибоначи', key: 'Пара2'},
        {title: 'Мэпл', key: 'Пара3'}],
      students: [
        {
          studentName: 'Иван Иванов', lessons: [
            {lessonKey: 'Пара1', isPresent: true, lessonMark: 5},
            {lessonKey: 'Пара2', isPresent: false, lessonMark: 5},
            {lessonKey: 'Пара3', isPresent: null, lessonMark: 2}]
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>