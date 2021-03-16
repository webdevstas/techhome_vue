<template>
    <section class="panel future" id="future">
        <div class="container">
            <h2 class="section__title">{{ langData.title }}</h2>
            <div class="future-slogan">
                <span>
                  {{ langData.slogan }}
                </span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['langData']
};
</script>

<style lang="sass">
.future
    background-color: #212139
    &-slogan
      font-family: 'RobotoBold'
      text-transform: uppercase
      font-size: 36px
      position: relative
      top: 30vh
@media (max-width: 768px)
  .future-slogan
    font-size: 30px
</style>
