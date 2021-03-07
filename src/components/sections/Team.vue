<template>
    <section class="panel team" id="team">
        <div class="container">
            <h2 class="section__title">{{ langData.title }}</h2>
            <div class="team__grid">
                <div class="team__item" v-for="person in langData.persons" :key="person.name">
                    <img :src="person.icon" alt="" class="team__img"/>
                    <div class="team__text">
                        <span class="team__name">{{ person.name }}</span>
                        <span class="team__role">{{ person.role }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['langData'],
    data: () => ({}),
    computed: {},
    methods: {}
};
</script>

<style lang="sass">
.team
    background-color: #171727
    position: relative

    &__grid
        top: 15vh
        position: relative
        display: grid
        grid-template-columns: repeat(4, 1fr)
        grid-row-gap: 50px

    &__item
        display: flex
        flex-direction: column
        align-items: center

    &__img
        width: 120px
        height: auto
        margin-bottom: 20px

    &__text
        display: flex
        flex-direction: column
        align-items: center
</style>