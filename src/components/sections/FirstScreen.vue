<template>
    <section class="first__screen panel" id="firstScreen">
        <div class="container">
            <div class="first__screen-slogan">
                <span v-for="str in langData.slogan" :key="str" v-html="str"></span>
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
.first__screen
    position: relative

    &-slogan
        font-size: 46px
        color: #d9d9d9
        text-transform: uppercase
        letter-spacing: 8px
        font-family: 'RobotoBold'
        text-align: start
        position: relative
        top: 40vh

        & span
            display: block

@media (max-width: 768px)
  .first__screen-slogan
    font-size: 40px
    top: 20vh
@media (max-width: 576px)
  .first__screen-slogan
    font-size: 32px
    top: 10vh
</style>
