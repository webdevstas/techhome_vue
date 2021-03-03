import {createStore, createLogger} from 'vuex'
import team from './modules/team'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        team
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})