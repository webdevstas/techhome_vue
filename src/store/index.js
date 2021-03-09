import {createStore, createLogger} from 'vuex'
import headerModule from './modules/header'
import firstScreenModule from './modules/firstScreen'
import softwareModule from './modules/software'
import gamesModule from './modules/games'
import futureModule from './modules/future'
import teamModule from './modules/team'
import footerModule from './modules/footer'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        team: {
            ...teamModule
        },
        header: {
            ...headerModule
        },
        firstScreen: {
            ...firstScreenModule
        },
        software: {
            ...softwareModule
        },
        games: {
            ...gamesModule
        },
        future: {
            ...futureModule
        },
        footer: {
            ...footerModule
        },
    },
    state: {},
    mutations: {},
    getters: {},
    actions: {},
    strict: debug,
    plugins: debug ? [createLogger()] : []
})
