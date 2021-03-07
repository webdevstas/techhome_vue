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
        top: 40vh

        & span
            display: block
.red
  display: inline !important
  color: rgb(220, 72, 62)
</style>