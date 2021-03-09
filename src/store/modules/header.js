export default {
    namespaced: true,
    state() {
        return {
            ru: {
                menuItems: {
                    software: 'программы',
                    games: '<span class="red">игры</span>',
                    future: 'будущее',
                    team: 'команда'
                }
            },
            en: {
                menuItems: {
                    software: 'software',
                    games: '<span class="red">games</span>',
                    future: 'future',
                    team: 'team'
                }
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


