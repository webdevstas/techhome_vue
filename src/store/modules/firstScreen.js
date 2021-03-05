const state = () => {
    return {
        ru: {
            slogan: ['мы - независимая IT студия.', 'мы создаём программы.', 'мы создаём игры.', 'мы создаём будущее.']
        },
        en: {
            slogan: ['We\'re an independent', 'development studio.', 'We make SOFTWARE.', 'We make games.', 'We make future.']
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