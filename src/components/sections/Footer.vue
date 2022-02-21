<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="footer-contacts">
            <span class="footer-contacts__title">{{ langData.title }}</span>
            <span class="footer-contacts__country">{{ langData.country }}</span>
            <span class="footer-contacts__address">{{ langData.address }}</span>
            <span class="footer-contacts__mail">mail: <a :href="'mailto:'+langData.mail">{{langData.mail}}</a></span>
          </div>
        </div>
        <div class="footer-col">
          <div class="footer-logo__block">
            <img src="/images/th_logo.png" alt="" class="footer-logo__img"/>
            <img
                src="/images/th_games_logo.png"
                alt=""
                class="footer-logo__img"/>
            <img src="/images/th_go_logo.png" alt="" class="footer-logo__img"/>
            <img src="/images/go_logo.png" alt="" class="footer-logo__img"/>
          </div>
        </div>
        <div class="footer-col"></div>
      </div>
      <div class="footer-copyright">
        © 2021 TECHHOME GROUP - All rights reserved
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: ["langData"],
};
</script>

<style lang="sass">
.footer
  background-color: #fff
  padding: 20px 0
  position: relative

  &-grid
    display: grid
    grid-template-columns: repeat(3, 1fr)
    align-items: center

  &-contacts
    display: flex
    flex-direction: column
    font-size: 18px
    color: #000

    & a
      color: #000

    &__title
      font-size: 30px
      margin: 15px 0

  &-logo
    &__block
      display: flex
      flex-direction: row
      justify-content: space-around
      width: 80%
      margin: auto

    &__img
      width: auto
      height: 60px

  &-copyright
    width: 100%
    text-align: center
    color: #b3b3b3
    font-size: 11px

@media (max-width: 1800px)
  .footer
    &-logo
      &__block
        width: 100%
@media (max-width: 1500px)
  .footer
    &-grid
      grid-template-columns: 2fr 2fr
@media (max-width: 768px)
  .footer
    &-grid
      grid-template-columns: 1fr
      gap: 30px

    &-contacts
      align-items: center

      &__address
        text-align: center

    &-logo
      &__block
        width: 50%

      &__img
        height: 40px
        width: auto
  @media (max-width: 574px)
    .footer
      &-logo
        &__block
          width: 85%
    @media (max-width: 390px)
    .footer
      &-logo
        &__block
          width: 100%
</style>
