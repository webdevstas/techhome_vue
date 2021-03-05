<template>
    <section class="panel future" id="future">
        <div class="container">
            <h2 class="section__title">{{ langData.title }}</h2>
            <div class="first__screen-slogan">
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
</style>