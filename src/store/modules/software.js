export default {
    namespaced: true,
    state() {
        return {
            ru: {
                title: 'программное обеспечение',
                text: 'Мы разрабатываем программное обеспечение для системы многофункциональных <span class="red">городских терминалов</span>. Пилотный проект будет реализован в Сочи в 2021 году.'
            },
            en: {
                title: 'software',
                text: 'We are developing the software for the system of multifunctional <span class="red">city terminals</span>. The pilot project will be implemented in Sochi in 2021.'
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
