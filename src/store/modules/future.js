export default {
    namespaced: true,
    state() {
        return {
            ru: {
                title: 'будущее',
                slogan: 'будущее прямо сейчас находится в разработке...'
            },
            en: {
                title: 'future',
                slogan: 'The future is in the works right now...'
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
