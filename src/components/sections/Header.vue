<template>
  <header class="header" :style="{
    fontFamily: lang == 'en' ? 'SenBold' : 'RobotoBold'
  }">
    <div class="header-logo" v-scroll-to="'#firstScreen'">
      <img src="/images/logo.svg" alt="" class="header-logo__img"/>
    </div>
    <div class="header-menu" ref="menu">
      <ul class="header-menu__list">
        <li class="header-menu__item"
            v-for="(item, key) in langData.menuItems"
            :key="item"
            v-scroll-to="`#${key}`"
            @mouseenter="animMenuItem($event)" v-html="item"></li>
      </ul>
      <img src="/images/translate.png" alt="" class="translate-icon" @click="changeLang($event)"/>
    </div>
    <!--    <div class="backdrop" ref="backdrop" @click="closeMobileMenu"></div>-->
    <!--    <div class="header-burger" @click="openMobileMenu">-->
    <!--      <div class="header-burger__item"></div>-->
    <!--      <div class="header-burger__item"></div>-->
    <!--      <div class="header-burger__item"></div>-->
    <!--    </div>-->
  </header>
</template>

<script>
export default {
  props: ['lang', 'langData'],
  emits: ['onLangChange'],

  data() {
    return {
      mobileMenuOpened: false
    }
  },

  methods: {

    animMenuItem(event) {
      this.gsap.to(event.target, {
        y: -5,
        yoyo: true,
        repeat: 1,
        ease: 'bounce.in',
        onComplete: () => {
          this.gsap.to(event.target, {
            y: 0
          })
        }
      })
    },

    changeLang(event) {
      this.gsap.to(event.target, {
        rotation: 180,
        ease: 'back',
        yoyo: true,
        onComplete: () => {
          this.gsap.to(event.target, {
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

    openMobileMenu() {
      this.mobileMenuOpened = true

      const backdrop = this.$refs.backdrop
      const menu = this.$refs.menu

      menu.style.display = 'block'
      backdrop.style.display = 'block'

      this.gsap.to(backdrop, {
        x: 2000,
        onComplete: () => {
          this.gsap.to(menu, {
            x: 1000
          })
        }
      })
    },

    closeMobileMenu() {
      this.mobileMenuOpened = false

      const backdrop = this.$refs.backdrop
      const menu = this.$refs.menu

      this.gsap.to(menu, {
        x: -1000,
        onComplete: () => {
          this.gsap.to(backdrop, {
            x: -2000,
            onComplete: () => {
              menu.style.display = 'none'
              backdrop.style.display = 'none'
            }
          })
        }
      })
    }
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
  transition: .5s

  &-logo
    display: block
    width: 80px
    height: auto
    cursor: pointer

  &-menu
    z-index: 200
    display: flex
    flex-direction: row
    justify-content: space-between
    align-items: center
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

  &-burger
    width: 30px
    height: auto
    display: none
    cursor: pointer

    &__item
      border-bottom: 2px solid #fff
      margin-bottom: 5px

.translate-icon
  width: 30px
  height: auto

.backdrop
  position: fixed
  left: -2000px
  top: 0
  width: 100%
  height: 100%
  background-color: rgba(0, 0, 0, 0.4)
  backdrop-filter: blur(3px)
  z-index: 100
  display: none
  cursor: pointer

@media (max-width: 1200px)
  .header
    padding: 10px 100px
    width: calc(100vw - 200px)

@media (max-width: 992px)
  .header
    padding: 10px 50px
    width: calc(100vw - 100px)

@media (max-width: 768px)
  .header
    padding: 10px 20px
    width: calc(100vw - 40px)

@media (max-width: 576px)
  .header
    padding: 10px
    width: calc(100vw - 20px)

    &-logo
      width: 40px
      height: 20px

      &__img
        height: 100%

    &-menu
      width: -moz-available
      width: -webkit-fill-available

      &__list
        width: 250px
        padding: 0
        flex-wrap: wrap
        justify-content: space-around
        margin: auto
      &__item
        font-size: 13px
        display: flex
        align-items: center
  .translate-icon
    width: 20px
//burger and left menu
  //&-menu
  //  display: none
  //  position: fixed
  //  left: -1000px
  //  top: 0
  //  height: 100vh
  //  width: 200px
  //  background-color: rgba(34, 27, 86, 0.9)
  //  backdrop-filter: blur(10px)
  //  padding-top: 50px
  //
  //  &__list
  //    flex-direction: column
  //    width: auto
  //    justify-content: space-around
  //    height: 30%
  //
  //&-burger
  //  display: block
</style>
