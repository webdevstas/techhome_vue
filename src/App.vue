<template>
  <Header />
  <FirstScreen />
  <section class="panel second">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maiores enim
    dolores quasi necessitatibus iste numquam tempora unde voluptas suscipit,
    sequi tenetur pariatur id delectus ea aspernatur voluptates optio fugit?
  </section>
</template>

<script>
import FirstScreen from "./components/FirstScreen";
import Header from "./components/Header";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default {
  name: "App",
  components: {
    FirstScreen,
    Header,
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".panel").forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
        // markers: true,
      });
    });
  },
};
</script>

<style lang="sass">
@font-face
    font-family: 'RobotoRegular'
    src: url('/fonts/Roboto-Regular.ttf')
@font-face
    font-family: 'RobotoBold'
    src: url('/fonts/Roboto-Bold.ttf')
@font-face
    font-family: 'SenRegular'
    src: url('/fonts/Sen-Regular.ttf')
@font-face
    font-family: 'SenBold'
    src: url('/fonts/Sen-Bold.ttf')
#app
    font-family: Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    margin-top: 60px
.panel
    height: 100vh
.second
    background-color: #fff
</style>
