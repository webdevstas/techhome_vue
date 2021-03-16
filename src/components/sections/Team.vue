<template>
  <section class="panel team" id="team">
    <div class="container">
      <h2 class="section__title">{{ langData.title }}</h2>
      <div class="team-grid">
        <div class="team-item" v-for="person in langData.persons" :key="person.name">
          <div class="team-img__wrap">
            <img :src="person.icon" alt="" class="team-img"/>
            <a :href="person.insta" class="instagram-link" v-if="person.insta" target="_blank">
              <img src="/images/instagram.svg" alt="" class="instagram-logo"></a>
          </div>
          <div class="team-text">
            <span class="team-name">{{ person.name }}</span>
            <span class="team-role">{{ person.role }}</span>
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

      &-grid
        top: 15vh
        position: relative
        display: grid
        grid-template-columns: repeat(4, 1fr)
        grid-row-gap: 50px

      &-role
        color: cornflowerblue

      &-item
        display: flex
        flex-direction: column
        align-items: center
        position: relative

        & span
          text-align: center

      &-img
        width: 120px
        height: auto
        margin-bottom: 20px
        &__wrap
          position: relative
      &-text
        display: flex
        flex-direction: column
        align-items: center

    .instagram

      &-logo
        width: 40px

      &-link
        position: absolute
        right: -20px

    @media (max-width: 992px)
      .team
        &-grid
          top: 10vh

    @media (max-width: 576px)
      .team
        &-grid
          top: 0
          grid-template-columns: repeat(3, 1fr)
          gap: 5px

    @media (max-width: 420px)
      .team
        &-item
          margin-bottom: 10px

        &-img
          width: 80px
          margin-bottom: 5px

        &-text
          font-size: 14px
      .instagram
        &-link
          right: -5px
        &-logo
          width: 20px
  </style>
