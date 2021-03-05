<template>
    <section class="panel games" id="games">
        <div class="container">
            <h2 class="section__title">{{ langData.title }}</h2>
            <div class="games-img__wrap">
                <img src="/images/games.jpg" alt="" class="games-img">
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
.games
    background-color: #171727

    &-img
        max-width: 100%
</style>