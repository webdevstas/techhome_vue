const state = () => {
    return {
        ru: {
            title: 'команда',
            persons: [
                {
                    name: 'Кирилл Коваленко',
                    role: 'CEO',
                    icon: '/images/kovalenko.png'
                },
                {
                    name: 'Антон Добрыгин',
                    role: 'Основатель',
                    icon: '/images/dobrygin.png'
                },
                {
                    name: 'Александр Мелякин',
                    role: 'Художник',
                    icon: '/images/melyakin.png'
                },
                {
                    name: 'Михаил Гордеев',
                    role: 'Game designer',
                    icon: '/images/gordeev.png'
                },
                {
                    name: 'Станислав Спирин',
                    role: 'Fullstack web-разработчик',
                    icon: '/images/spirin.png'
                },
                {
                    name: 'Олег Бабенков',
                    role: 'Программист',
                    icon: '/images/babenkov.png'
                },
                {
                    name: 'Андрей Ковалёв',
                    role: 'C# программист',
                    icon: '/images/kovalev.png'
                },
                {
                    name: 'Ярослав Моцарт',
                    role: 'Sound designer',
                    icon: '/images/kovalenko.png'
                }
            ],
        },
        en: {
            title: 'team',
            persons: [
                {
                    name: 'Kirill Kovalenko',
                    role: 'CEO',
                    icon: '/images/kovalenko.png'
                },
                {
                    name: 'Anton Dobrygin',
                    role: 'Founder',
                    icon: '/images/dobrygin.png'
                },
                {
                    name: 'Alexander Melyakin',
                    role: 'Artist',
                    icon: '/images/melyakin.png'
                },
                {
                    name: 'Mikhail Gordeev',
                    role: 'Game designer',
                    icon: '/images/gordeev.png'
                },
                {
                    name: 'Stanislav Spirin',
                    role: 'Web disigner',
                    icon: '/images/spirin.png'
                },
                {
                    name: 'Oleg Babenkov',
                    role: 'Programmer',
                    icon: '/images/babenkov.png'
                },
                {
                    name: 'Andrey Kovalev',
                    role: 'C# programmer',
                    icon: '/images/kovalev.png'
                },
                {
                    name: 'Yroslav Mocart',
                    role: 'Sound designer',
                    icon: '/images/kovalenko.png'
                },
            ],
        }
    }
}
const getters = {
    ru: (state) => {
        return state.ru
    },
    en: (state) => {
        return state.en
    }
}
export default {state, getters}

