<template>
  <section class="first__screen panel">
    <div class="container">
      <div class="first__screen-slogan">
        We're an independent <br />
        development studio. <br />
        We make SOFTWARE. <br />
        We make games. <br />
        We make future.
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="sass">
body
  margin: 0
  padding: 0
  background-color: #171727
  font-family: 'SenRegular'
.container
  padding: 0 300px
.first__screen
  height: 100vh
  position: relative
  &-slogan
    font-size: 46px
    color: #d9d9d9
    text-transform: uppercase
    letter-spacing: 8px
    font-family: 'RobotoBold'
    text-align: start
    position: relative
    top: 50vh
    transform: translateY(-50%)
</style>