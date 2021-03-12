export default {
    namespaced: true,
    state() {
        return {
            ru: {
                title: 'команда',
                persons: [
                    {
                        name: 'Кирилл Коваленко',
                        role: 'CEO',
                        icon: '/images/kovalenko.png',
                        insta: 'http://instagram.com/kkovalenko13'
                    },
                    {
                        name: 'Антон Добрыгин',
                        role: 'Основатель',
                        icon: '/images/dobrygin.png',
                        insta: ''
                    },
                    {
                        name: 'Александр Мелякин',
                        role: 'Художник',
                        icon: '/images/melyakin.png',
                        insta: ''
                    },
                    {
                        name: 'Михаил Гордеев',
                        role: 'Game designer',
                        icon: '/images/gordeev.png',
                        insta: ''
                    },
                    {
                        name: 'Станислав Спирин',
                        role: 'Fullstack web-разработчик',
                        icon: '/images/spirin.png',
                        insta: 'http://instagram.com/spirin.stas'
                    },
                    {
                        name: 'Олег Бабенков',
                        role: 'Программист',
                        icon: '/images/babenkov.png',
                        insta: ''
                    },
                    {
                        name: 'Андрей Ковалёв',
                        role: 'C# программист',
                        icon: '/images/kovalev.png',
                        insta: ''
                    },
                    {
                        name: 'Ярослав Моцарт',
                        role: 'Sound designer',
                        icon: '/images/kovalenko.png',
                        insta: ''
                    }
                ],
            },
            en: {
                title: 'team',
                persons: [
                    {
                        name: 'Kirill Kovalenko',
                        role: 'CEO',
                        icon: '/images/kovalenko.png',
                        insta: 'http://instagram.com/kkovalenko13'
                    },
                    {
                        name: 'Anton Dobrygin',
                        role: 'Founder',
                        icon: '/images/dobrygin.png',
                        insta: ''
                    },
                    {
                        name: 'Alexander Melyakin',
                        role: 'Artist',
                        icon: '/images/melyakin.png',
                        insta: ''
                    },
                    {
                        name: 'Mikhail Gordeev',
                        role: 'Game designer',
                        icon: '/images/gordeev.png',
                        insta: ''
                    },
                    {
                        name: 'Stanislav Spirin',
                        role: 'Fullstack web-developer',
                        icon: '/images/spirin.png',
                        insta: 'http://instagram.com/spirin.stas'
                    },
                    {
                        name: 'Oleg Babenkov',
                        role: 'Programmer',
                        icon: '/images/babenkov.png',
                        insta: ''
                    },
                    {
                        name: 'Andrey Kovalev',
                        role: 'C# programmer',
                        icon: '/images/kovalev.png',
                        insta: ''
                    },
                    {
                        name: 'Yroslav Mocart',
                        role: 'Sound designer',
                        icon: '/images/kovalenko.png',
                        insta: ''
                    },
                ],
            }
        }
    },
    getters: {
        ru: (state) => {
            return state.ru
        },
        en: (state) => {
            return state.en
        }
    }
}

