<template>
  <section class="panel team" id="team">
    <div class="container">
      <h2 class="section__title">{{ langData.title }}</h2>
      <div class="team__grid">
        <div class="team__item" v-for="person in langData.persons" :key="person.name">
          <img :src="person.icon" alt="" class="team__img"/>
          <a :href="person.insta" class="instagram-link" v-if="person.insta" target="_blank">
            <img src="/images/instagram.svg" alt="" class="instagram-logo"></a>
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
    position: relative
    & span
      text-align: center
  &__img
    width: 120px
    height: auto
    margin-bottom: 20px

  &__text
    display: flex
    flex-direction: column
    align-items: center

.instagram
  &-logo
    width: 40px
    right: 90px

  &-link
    position: absolute
    right: 25%
@media (max-width: 992px)
  .team
    &__grid
      top: 10vh
  .instagram
    &-link
      right: 10%
@media (max-width: 576px)
  .team
    &__grid
      top: 0
      grid-template-columns: repeat(3, 1fr)
      gap: 5px
  .instagram
    &-link
      right: 10%
@media (max-width: 420px)
  .team
    &__item
      margin-bottom: 10px
    &__img
      width: 80px
      margin-bottom: 5px
    &__text
      font-size: 14px
  .instagram
    &-logo
      width: 20px
</style>
