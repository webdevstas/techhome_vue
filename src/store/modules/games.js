const state = () => {
    return {
        ru: {
            title: 'игры'
        },
        en: {
            title: 'games'
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