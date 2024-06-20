export default [
        {title: 'Первый семестр',
            value: [
                {
                    title: '09.02.01',
                    value: [
                        {
                            title: '1',
                            value: [
                                {
                                    title: 'ПЕ-11',
                                    value: [
                                        {
                                            title: 'Математика',
                                            objectsTypes: [
                                                {
                                                    objectType: 'Практика',
                                                    headers: [
                                                        {title: 'Фамилия', key: 'fio'},
                                                        {title: 'Комплексные числа', key: 'Пара1'},
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
                                                },
                                                {
                                                    objectType: 'Лекции',
                                                    headers: [
                                                        {title: 'Фамилия', key: 'fio'}, {
                                                            title: 'Комплексные числа',
                                                            key: 'Пара1'
                                                        },
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
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
