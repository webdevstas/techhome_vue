<template>
  <section class="panel software" id="software">
    <div class="container">
      <h2 class="section__title">{{ langData.title }}</h2>
      <div class="software-row">
        <p class="software-text" v-html="langData.text"></p>
        <img src="@/assets/10003.png" alt="" class="software-img">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["langData"],
};
</script>

<style lang="sass">
.software
  background-color: #212139

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
    font-size: 38px

@media (max-width: 768px)
  .software-text
    font-size: 32px

@media (max-width: 576px)
  .software
    &-text
      font-size: 28px
      width: 100%
      top: 20vh
      position: relative
    &-img
      display: none
</style>
