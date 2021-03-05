const state = () => {
    return {
        ru: {
            menuItems: {
                software: 'программы',
                games: 'игры',
                future: 'будущее',
                team: 'команда'
            }
        },
        en: {
            menuItems: {
                software: 'software',
                games: 'games',
                future: 'future',
                team: 'team'
            }
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

