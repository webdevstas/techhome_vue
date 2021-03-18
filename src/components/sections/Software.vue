<template>
  <section class="panel software" id="software">
    <div class="container">
      <h2 class="section__title slide" :style="{
          fontFamily: $root.lang === 'en' ? 'SenBold' : 'RobotoBold'
      }">
        {{ langData.title }}
      </h2>
      <div class="software-row">
        <p class="software-text" v-html="langData.text"></p>
        <img src="@/assets/10003.png" alt="" class="software-img">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['langData', 'clientWidth'],

  data() {
    return {}
  },

  mounted() {
    if (this.clientWidth > 576) {
      this.gsap.to('.software-img', {
        scrollTrigger: {
          trigger: '.software',
          // markers: true,
          scrub: 1,
          start: '100 top'
        },
        scale: 4,
        y: 500,
        x: this.clientWidth < 768 ? -220 : 0
      })
    }
    else {
      let tl = new this.gsap.timeline
      tl.to('.software-img', {
        scrollTrigger: {
          trigger: '.software',
          // markers: true,
          scrub: 0.5,
          start: 'top+=20 top',
          end: 'center-=500px top'
        },
        scale: 1.5,
        // y: -200
      })

      tl.to('.software-img', {
        scrollTrigger: {
          trigger: '.software',
          // markers: true,
          scrub: 0.5,
          start: 'center-=501px top',
          end: 'center-=200 top'
        },
        y: -380
      })

      this.gsap.to('.software-text', {
        scrollTrigger: {
          trigger: '.software',
          // markers: true,
          scrub: 0.5,
          start: '100 top',
          end: 'center-=400px top'
        },
        opacity: 0
      })
    }
  }
};
</script>

<style lang="sass">
.software
  background-color: #fff
  height: 1500px
  color: #222222

  &-row
    display: flex
    flex-direction: row
    align-items: center
    justify-content: space-between

  &-text
    width: 60%
    font-size: 40px
    font-weight: bold

  &-img
    width: 20%

@media (max-width: 992px)
  .software-text
    font-size: 34px

@media (max-width: 768px)
  .software
    &-text
      font-size: 28px
      position: relative

    &-img
      position: relative
      width: 30%

@media (max-width: 576px)
  .software
    height: 1200px
    overflow: hidden
    &-row
      flex-direction: column
    &-text
      font-size: 28px
      width: 100%
      top: 20vh

    &-img
      width: 45%
      position: relative
      top: 20vh
</style>
