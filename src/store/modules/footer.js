export default {
    namespaced: true,
    state() {
        return {
            ru: {
                title: 'Контакты',
                country: 'Российская Федерация',
                address: 'Сочи, ул. Тоннельная 2а, офис 403',
                tel: '+7 862 265 9313',
                mail: 'th@techhome3d.ru'
            },
            en: {
                title: 'Contact',
                country: 'Russian Federation',
                address: 'Sochi, Tonnelnaya str. 2A, of. 403',
                tel: '+7 862 265 9313',
                mail: 'th@techhome3d.ru'
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

