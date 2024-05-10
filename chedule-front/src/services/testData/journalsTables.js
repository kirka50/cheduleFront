export default [{
    tablePath:["Второй семестр", "09.02.02", "Курс 1", "ПЕ-11", "Физика"],
    lessonName:'Физика',
    lessonTables: [
        {
            lessonType:'Лекция',
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
        },
        {
            lessonType:'Практика',
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
                        {lessonKey: 'Пара1', isPresent: null, lessonMark: 4},
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
            lessonType:'Лабы',
            headers: [
                {title: 'Фамилия', key: 'fio'}, {title: 'Комплексные числа', key: 'Пара1'},
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
                        {lessonKey: 'Пара2', isPresent: false, lessonMark: 2},
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
    ],
}]