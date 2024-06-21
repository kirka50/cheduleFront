<template>
  <v-layout>
    <v-navigation-drawer
        width="350"
        expand-on-hover
        v-model="drawer"
    >
      <v-list slim class="d-flex flex-column">
        <v-list-item prepend-icon="mdi-hub" @click="$router.push('/hub')">Hub</v-list-item>
        <v-divider class="ma-3"></v-divider>
        <RecursiveList @update-title="updateTitle" :items="testList"></RecursiveList>
        <v-divider class="ma-3"></v-divider>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar>
      <v-app-bar-nav-icon icon="mdi-menu" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>{{getTableTitle ? getTableTitle : 'Выберите таблицу' }}</v-app-bar-title>
    </v-app-bar>
    <v-main class="bg-grey-lighten-4">
        <v-layout class="fill-height ma-1">
          <v-main>
            <v-container :title="getTableTitle" class="ma-1">
              <template v-if="getTableFromType.lessonType === 'Итоги'">
                <v-row>
                  <v-col>
                    <v-select class="w-25" variant="outlined" v-model="selectedTable" :items="getTableFromType.tables.map(el => el.tableName)"></v-select>
                  </v-col>
                  <v-col class="d-flex justify-end">
                    <v-select class="w-25" variant="outlined" v-model="selectedChart" :items="getTableFromType.charts.map(el => el.chartName)"></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-data-table
                        v-if="getTableFromName(getTableFromType.tables, selectedTable).headers"
                        :headers="getTableFromName(getTableFromType.tables, selectedTable).headers"
                        :items="getTableFromName(getTableFromType.tables, selectedTable).students"
                        class="rounded">
                      <template v-slot:item="{ item }">
                        <tr>
                          <td>{{ item.studentName }}</td>
                          <td v-for="lesson in studentPresent(getTableFromName(getTableFromType.tables, selectedTable)
                        .headers, item.lessons)">
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
                  </v-col>
                  <v-col>
                    <Line v-if="getChartFromName(getTableFromType.charts, selectedChart).chartData"
                          :data="getChartFromName(getTableFromType.charts, selectedChart).chartData"
                    >

                    </Line>
                  </v-col>
                </v-row>
              </template>
              <template v-else-if="getTableFromType">
                <v-data-table
                    :headers="getTableFromType.headers"
                    :items="getTableFromType.students"
                    class="rounded"
                >
                  <template v-slot:item="{ item }"
                  >
                    <tr>
                      <td>{{ item.studentName }}</td>
                      <td v-for="lesson in studentPresent(getTableFromType.headers, item.lessons)">
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
              </template>
                <div v-if="getTablesTypes" class="d-flex flex-column pa-6">
                  <v-btn-toggle
                      v-model="selectedTableType"
                      divided
                  >
                    <v-btn v-for="i in getTablesTypes" :text="i" :value="i">
                    </v-btn>
                  </v-btn-toggle>
                </div>
            </v-container>
          </v-main>
        </v-layout>
    </v-main>
  </v-layout>

</template>
<!--TODO написать отображение выбранного селектора


-->
<script>
import RecursiveList from "../../components/Journal/RecursiveList.vue";
import testList from '../../services/testData/testlist.js'
import tablesData from '../../services/testData/journalsTables.js'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

export default {
  name: "TestPage",
  components: {RecursiveList, Line},
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
    },
    getTableFromName(tablesArray, tableName) {
      for (const table of tablesArray) {
        if (table.tableName === tableName) {
          return table
        }
      }
      return false
    },
    getChartFromName(chartsArray, chartName) {
      for (const chart of chartsArray) {
        if (chart.chartName === chartName) {
          return chart
        }
      }
      return false
    }
  },
  computed: {
    getSelectedTables() {
      for (const table of this.tablesData) {
        if (this.tablePath == table.tablePath) {
          return table
        }
      }
      return false
    },
    getTablesTypes() {
      return this.getSelectedTables ? this.getSelectedTables.lessonTables.map(lesson => lesson.lessonType) : null
    },
    getTableFromType() {
      try {
        for (const table of this.getSelectedTables.lessonTables) {
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
      drawer: false,
      tablePath: [],
      selectedTable: '',
      selectedChart: '',
      selectedTableType: this.getTablesTypes,
      tablesData: tablesData,
      testList: testList,
    }
  },
}
</script>

<style scoped>

</style>