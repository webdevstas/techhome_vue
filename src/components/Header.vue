<template>
    <header class="header">
      <div class="header-logo"><img src="/images/logo.svg" alt="" class="header-logo__img"></div>
      <div class="header-menu">
        <ul class="header-menu__list">
          <li class="header-menu__item">software</li>
          <li class="header-menu__item">games</li>
          <li class="header-menu__item">future</li>
          <li class="header-menu__item">team</li>
          <li class="header-menu__item"><img src="/images/translate.png" alt="" class="translate-icon"></li>
        </ul>
      </div>
    </header>
</template>

<script>
export default {};
</script>

<style lang="sass">
.header
    display: flex
    flex-direction: row
    align-items: center
    justify-content: space-between
    padding: 50px 300px
    position: absolute
    left: 0
    top: 0
    width: calc(100vw - 600px)
    &-logo
        display: block
        width: 90px
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