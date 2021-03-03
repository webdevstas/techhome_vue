<template>
  <Header />
  <FirstScreen />
  <Software />
  <Games />
  <Future />
  <Team />
  <Footer />
</template>

<script>
import FirstScreen from "./components/sections/FirstScreen";
import Header from "./components/sections/Header";
import Software from "./components/sections/Software";
import Games from "./components/sections/Games";
import Future from "./components/sections/Future";
import Team from "./components/sections/Team";
import Footer from "./components/sections/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default {
  name: "App",
  components: {
    FirstScreen,
    Header,
    Software,
    Games,
    Future,
    Team,
    Footer
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".panel").forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
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
body
  margin: 0
  padding: 0
  background-color: #171727
  font-family: 'SenRegular'
  color: #d9d9d9
.container
  padding: 0 300px
#app
  font-family: 'SenRegular'
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
section
  height: 100vh
  padding: 50px 0
.section__title
  font-size: 40px
  font-family: 'SenBold'
</style>
