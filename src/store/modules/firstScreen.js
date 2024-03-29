export default {
    namespaced: true,
    state () {
        return {
            ru: {
                slogan: ['мы - независимая IT студия.', 'мы создаём программы.', 'мы создаём <span class="red">игры.</span>', 'мы создаём будущее.']
            },
            en: {
                slogan: ['We\'re an independent', 'development studio.', 'We make SOFTWARE.', 'We make <span class="red">games.</span>', 'We make future.']
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
