const state = () => {
    return {
        ru: {
            title: 'программное обеспечение'
        },
        en: {
            title: 'software'
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
export default { state, getters }