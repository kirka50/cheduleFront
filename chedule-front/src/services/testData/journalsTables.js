export default [{
    tablePath:'Второй семестр_09.02.02_Курс 1_ПЕ-11_Физика',
    lessonName:'Физика',
    lessonTables: [
        {
            lessonType:'Лекция',
            headers: [{title: 'Фамилия', key: 'fio'}, {title: 'E*MC2', key: 'Пара1'},
                {title: 'Физика и её формулы', key: 'Пара2'},
                {title: 'Физические явления', key: 'Пара3'}],
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
        },
        {
            lessonType:'Практика',
            headers: [{title: 'Фамилия', key: 'fio'}, {title: 'Расчёт гравитации', key: 'Пара1'},
                {title: 'Расчёт пути', key: 'Пара2'},
                {title: 'Расчёт времени', key: 'Пара3'}],
            students: [
                {
                    studentName: 'Кирилл Резников', lessons: [
                        {lessonKey: 'Пара1', isPresent: true, lessonMark: 2},
                        {lessonKey: 'Пара2', isPresent: false, lessonMark: 2},
                        {lessonKey: 'Пара3', isPresent: null, lessonMark: 2}]
                },
                {
                    studentName: 'Кирилл Брагин', lessons: [
                        {lessonKey: 'Пара1', isPresent: true, lessonMark: 5},
                        {lessonKey: 'Пара2', isPresent: false, lessonMark: 5},
                        {lessonKey: 'Пара3', isPresent: null, lessonMark: 5}]
                },
                {
                    studentName: 'Ярослав Колташев', lessons: [
                        {lessonKey: 'Пара1', isPresent: true, lessonMark: 4},
                        {lessonKey: 'Пара2', isPresent: false, lessonMark: 4},
                        {lessonKey: 'Пара3', isPresent: null, lessonMark: 4}]
                },
                {
                    studentName: 'Савелий Капустин', lessons: [
                        {lessonKey: 'Пара1', isPresent: true, lessonMark: 3},
                        {lessonKey: 'Пара2', isPresent: false, lessonMark: 3},
                        {lessonKey: 'Пара3', isPresent: null, lessonMark: 3}]
                },
            ]
        },
        {
            lessonType:'Лабы',
            headers: [
                {title: 'Фамилия', key: 'fio'}, {title: 'Маятник', key: 'Пара1'},
                {title: 'Лазерные лучи', key: 'Пара2'},
                {title: 'Интерференция', key: 'Пара3'}],
            students: [
                {
                    studentName: 'Кирилл Резников', lessons: [
                        {lessonKey: 'Пара1', isPresent: true, lessonMark: 5},
                        {lessonKey: 'Пара2', isPresent: true, lessonMark: 5},
                        {lessonKey: 'Пара3', isPresent: true, lessonMark: 5}]
                },
                {
                    studentName: 'Кирилл Брагин', lessons: [
                        {lessonKey: 'Пара1', isPresent: false, lessonMark: 2},
                        {lessonKey: 'Пара2', isPresent: false, lessonMark: 2},
                        {lessonKey: 'Пара3', isPresent: false, lessonMark: 2}]
                },
                {
                    studentName: 'Ярослав Колташев', lessons: [
                        {lessonKey: 'Пара1', isPresent: true, lessonMark: 2},
                        {lessonKey: 'Пара2', isPresent: true, lessonMark: 3},
                        {lessonKey: 'Пара3', isPresent: true, lessonMark: 4}]
                },
                {
                    studentName: 'Савелий Капустин', lessons: [
                        {lessonKey: 'Пара1', isPresent: null, lessonMark: 5},
                        {lessonKey: 'Пара2', isPresent: null, lessonMark: 3},
                        {lessonKey: 'Пара3', isPresent: null, lessonMark: 2}]
                },
            ]
        }
    ],
},
    {
        tablePath:'Первый семестр_09.02.01_Курс 1_ПЕ-11_Математика',
        lessonName:'Математика',
        lessonTables: [
            {
                lessonType:'Лекция',
                headers: [{title: 'Фамилия', key: 'fio'}, {title: 'Почему нельзя на ноль', key: 'Пара1'},
                    {title: 'Бесконечные математики', key: 'Пара2'},
                    {title: 'Пределы', key: 'Пара3'}],
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
            },
            {
                lessonType:'Практика',
                headers: [{title: 'Фамилия', key: 'fio'}, {title: 'Делим на ноль', key: 'Пара1'},
                    {title: 'Задачка про математиков и бар', key: 'Пара2'},
                    {title: 'Расчёт пределов', key: 'Пара3'}],
                students: [
                    {
                        studentName: 'Кирилл Резников', lessons: [
                            {lessonKey: 'Пара1', isPresent: true, lessonMark: 2},
                            {lessonKey: 'Пара2', isPresent: false, lessonMark: 2},
                            {lessonKey: 'Пара3', isPresent: null, lessonMark: 2}]
                    },
                    {
                        studentName: 'Кирилл Брагин', lessons: [
                            {lessonKey: 'Пара1', isPresent: true, lessonMark: 5},
                            {lessonKey: 'Пара2', isPresent: false, lessonMark: 5},
                            {lessonKey: 'Пара3', isPresent: null, lessonMark: 5}]
                    },
                    {
                        studentName: 'Ярослав Колташев', lessons: [
                            {lessonKey: 'Пара1', isPresent: true, lessonMark: 4},
                            {lessonKey: 'Пара2', isPresent: false, lessonMark: 4},
                            {lessonKey: 'Пара3', isPresent: null, lessonMark: 4}]
                    },
                    {
                        studentName: 'Савелий Капустин', lessons: [
                            {lessonKey: 'Пара1', isPresent: true, lessonMark: 3},
                            {lessonKey: 'Пара2', isPresent: false, lessonMark: 3},
                            {lessonKey: 'Пара3', isPresent: null, lessonMark: 3}]
                    },
                ]
            },
        ],
    },
    {
        tablePath:'Второй семестр_09.02.02_Курс 3_ПЕ-11_Математика',
        lessonName:'Математика',
        lessonTables: [
            {
                lessonType:'Лекция',
                headers: [{title: 'Фамилия', key: 'fio'}, {title: 'Почему нельзя на ноль', key: 'Пара1'},
                    {title: 'Бесконечные математики', key: 'Пара2'},
                    {title: 'Пределы', key: 'Пара3'}],
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
            },
            {
                lessonType:'Практика',
                headers: [{title: 'Фамилия', key: 'fio'}, {title: 'Делим на ноль', key: 'Пара1'},
                    {title: 'Задачка про математиков и бар', key: 'Пара2'},
                    {title: 'Расчёт пределов', key: 'Пара3'}],
                students: [
                    {
                        studentName: 'Кирилл Резников', lessons: [
                            {lessonKey: 'Пара1', isPresent: true, lessonMark: 2},
                            {lessonKey: 'Пара2', isPresent: false, lessonMark: 2},
                            {lessonKey: 'Пара3', isPresent: null, lessonMark: 2}]
                    },
                    {
                        studentName: 'Кирилл Брагин', lessons: [
                            {lessonKey: 'Пара1', isPresent: true, lessonMark: 5},
                            {lessonKey: 'Пара2', isPresent: false, lessonMark: 5},
                            {lessonKey: 'Пара3', isPresent: null, lessonMark: 5}]
                    },
                    {
                        studentName: 'Ярослав Колташев', lessons: [
                            {lessonKey: 'Пара1', isPresent: true, lessonMark: 4},
                            {lessonKey: 'Пара2', isPresent: false, lessonMark: 4},
                            {lessonKey: 'Пара3', isPresent: null, lessonMark: 4}]
                    },
                    {
                        studentName: 'Савелий Капустин', lessons: [
                            {lessonKey: 'Пара1', isPresent: true, lessonMark: 3},
                            {lessonKey: 'Пара2', isPresent: false, lessonMark: 3},
                            {lessonKey: 'Пара3', isPresent: null, lessonMark: 3}]
                    },
                ]
            },
        ],
    },
    {
        tablePath:'Второй семестр_09.02.02_Курс 2_ПЕ-11_Геометрия',
        lessonName:'Геометрия',
        lessonTables: [
            {
                lessonType:'Лекция',
                headers: [{title: 'Фамилия', key: 'fio'}, {title: 'Треугольники', key: 'Пара1'},
                    {title: 'Круги', key: 'Пара2'},
                    {title: 'Квадраты', key: 'Пара3'}],
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
            },
        ],
    }]