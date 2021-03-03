<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="footer-contacts">
            <span class="footer-contacts__title">Contact</span>
            <span class="footer-contacts__country">Russian Federation</span>
            <span class="footer-contacts__address"
              >Sochi, Tonnelnaya str. 2A, of. 403</span
            >
            <span class="footer-contacts__address"
              >tel: <a href="tel:+78622659313">+7 862 265 9313</a></span
            >
            <span class="footer-contacts__address"
              >mail:
              <a href="mailto:tech-home@mail.ru">tech-home@mail.ru</a></span
            >
          </div>
        </div>
        <div class="footer-col">
            <div class="footer-logo__block">
                <img src="/images/th_logo.png" alt="" class="footer-logo__img">
                <img src="/images/th_games_logo.png" alt="" class="footer-logo__img">
                <img src="/images/th_go_logo.png" alt="" class="footer-logo__img">
                <img src="/images/go_logo.png" alt="" class="footer-logo__img">
            </div>
        </div>
        <div class="footer-col"></div>
      </div>
      <div class="footer-copyright">© 2021 TECHHOME GROUP - All rights reserved</div>
    </div>
  </footer>
</template>

<script>
export default {};
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
        font-size: 20px
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
        &__img
            width: auto
            height: 50px
    &-copyright
        width: 100%
        text-align: center
        color: #b3b3b3
</style>