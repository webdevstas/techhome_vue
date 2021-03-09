export default {
    namespaced: true,
    state() {
        return {
            ru: {
                title: 'игры'
            },
            en: {
                title: 'games'
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
