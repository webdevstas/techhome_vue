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
                        insta: 'https://instagram.com/qwerty_nv'
                    },
                    {
                        name: 'Александр Мелякин',
                        role: 'Художник',
                        icon: '/images/melyakin.png',
                        insta: ''
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
                        name: 'Ярослав Прокип',
                        role: 'Звук',
                        icon: '/images/prokip.png',
                        insta: 'https://instagram.com/rurich777'
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
                        insta: 'https://instagram.com/qwerty_nv'
                    },
                    {
                        name: 'Alexander Melyakin',
                        role: 'Artist',
                        icon: '/images/melyakin.png',
                        insta: ''
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
                        name: 'Yaroslav Prokip',
                        role: 'Sound',
                        icon: '/images/prokip.png',
                        insta: 'https://instagram.com/rurich777'
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

