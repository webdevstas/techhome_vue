export default {
    namespaced: true,
    state () {
        return {
            ru: {
                title: 'программное обеспечение'
            },
            en: {
                title: 'software'
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
