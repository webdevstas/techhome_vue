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
            namespaced: true,
            ...teamModule
        },
        header: {
            namespaced: true,
            ...headerModule
        },
        firstScreen: {
            namespaced: true,
            ...firstScreenModule
        },
        software: {
            namespaced: true,
            ...softwareModule
        },
        games: {
            namespaced: true,
            ...gamesModule
        },
        future: {
            namespaced: true,
            ...futureModule
        },
        footer: {
            namespaced: true,
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