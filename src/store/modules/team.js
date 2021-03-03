const state = () => ({
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

})
const getters = {
    team: (state) => {
        return state.persons
    }
}
export default {state, getters}

