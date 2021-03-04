/* eslint-disable no-unused-vars */
const team = {
    state: () => {
        return {
            ru: {
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
                ],
            },
            en: {
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
                ],
            }
        }
    },
    getters: {
        ru: (state, getters) => {
            return state.ru.persons
        },
        en: (state, getters) => {
            return state.en.persons
        }
    }
}
export default { team }

