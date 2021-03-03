<template>
  <header class="header">
    <div class="header-logo">
      <img src="/images/logo.svg" alt="" class="header-logo__img" />
    </div>
    <div class="header-menu">
      <ul class="header-menu__list">
        <li class="header-menu__item" @click="scrollToSection('#software')">
          software
        </li>
        <li class="header-menu__item" @click="scrollToSection('#games')">
          games
        </li>
        <li class="header-menu__item" @click="scrollToSection('#future')">
          future
        </li>
        <li class="header-menu__item" @click="scrollToSection('#team')">
          team
        </li>
        <li class="header-menu__item">
          <img src="/images/translate.png" alt="" class="translate-icon" />
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
export default {
  methods: {
    scrollToSection: (id) => {
      gsap.to(window, { duration: 1, scrollTo: { y: id, autoKill: true} });
    },
  },
  mounted() {
    this.$nextTick(function() {
      gsap.registerPlugin(ScrollToPlugin);
    })
  },
};
</script>

<style lang="sass">
.header
  display: flex
  flex-direction: row
  align-items: center
  justify-content: space-between
  padding: 20px 300px
  position: fixed
  left: 0
  top: 0
  width: calc(100vw - 620px)
  z-index: 1000
  &-logo
    display: block
    width: 80px
    height: auto
  &-menu
    &__list
      margin: 0
      display: flex
      flex-direction: row
      width: 450px
      justify-content: space-around
      list-style: none
    &__item
      font-size: 24px
      color: #d9d9d9
      font-family: 'SenBold'
.translate-icon
  width: 30px
  height: auto
</style>