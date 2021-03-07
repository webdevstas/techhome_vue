<template>
    <header class="header" :style="{
    fontFamily: lang == 'en' ? 'SenBold' : 'RobotoBold'
  }">
        <div class="header-logo" v-scroll-to="'#firstScreen'">
            <img src="/images/logo.svg" alt="" class="header-logo__img"/>
        </div>
        <div class="header-menu">
            <ul class="header-menu__list">
                <li class="header-menu__item" v-for="(item, key) in langData.menuItems" :key="item"
                    v-scroll-to="`#${key}`"
                    @mouseenter="animMenuItem($event)" v-html="item"></li>
                <li class="header-menu__item">
                    <img src="/images/translate.png" alt="" class="translate-icon" @click="changeLang($event)"/>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
import gsap from 'gsap';
export default {
    props: ['lang', 'langData'],
    methods: {

        animMenuItem(event) {
            gsap.to(event.target, {
                y: -5,
                yoyo: true,
                repeat: 1,
                ease: 'bounce.in',
                onComplete: () => {
                    gsap.to(event.target, {
                        y: 0
                    })
                }
            })
        },

        changeLang(event) {

            gsap.to(event.target, {
                rotation: 180,
                ease: 'back',
                yoyo: true,
                onComplete: () => {
                    gsap.to(event.target, {
                        rotate: 0
                    })

                    if (this.lang === 'en') {
                        this.$emit('onLangChange', 'ru')
                    } else {
                        this.$emit('onLangChange', 'en')
                    }
                }
            })
        },
    },

    mounted() {

    },
};
</script>

<style lang="sass">
.header
    display: flex
    flex-direction: row
    align-items: center
    justify-content: space-between
    padding: 10px 300px
    position: fixed
    left: 0
    top: 0
    width: calc(100vw - 600px)
    z-index: 1000
    &-logo
        display: block
        width: 80px
        height: auto
        cursor: pointer

    &-menu
        &__list
            margin: 0
            display: flex
            flex-direction: row
            width: 500px
            justify-content: space-around
            list-style: none

        &__item
            font-size: 24px
            color: #d9d9d9
            cursor: pointer

.translate-icon
    width: 30px
    height: auto
</style>