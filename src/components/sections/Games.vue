<template>
  <section class="panel games" id="games">
    <h2 class="section__title" :style="{
          fontFamily: $root.lang === 'en' ? 'SenBold' : 'RobotoBold'
      }">
      {{ langData.title }}
    </h2>
    <div class="container" v-if="!isMobile">
      <div class="games-img__wrap">
        <img src="/images/games.jpg" alt="" class="games-img">
      </div>
    </div>
    <div class="games-bg" v-else></div>
  </section>
</template>

<script>
export default {
  props: ['langData'],

  data() {
    return {
      isMobile: document.documentElement.getBoundingClientRect().width < 768
    }
  },

  mounted() {
    window.addEventListener('resize', () => {
      const rect = document.documentElement.getBoundingClientRect()
      this.isMobile = rect.width < 768
    })
  }
};
</script>

<style lang="sass">
.games
  background-color: #171727

  &-img
    max-width: 100%
  &-bg
    width: 100%
    height: 90%
    background: url("/images/games-vertical.jpg") no-repeat center
    background-size: contain
@media (max-width: 768px)
  .games-img__wrap
    position: relative
    top: 20vh
</style>
