<template>
  <section class="panel software" id="software">
    <div class="container">
      <h2 class="section__title">{{ langData.title }}</h2>
    </div>
  </section>
</template>

<script>
export default {
  props: ["langData"],
};
</script>

<style lang="sass">
.software
    background-color: #212139
</style>