<!--suppress CssUnknownTarget -->
<template>
  <div :style="{
    fontFamily: lang === 'en' ? 'SenRegular' : 'RobotoRegular'
}">
    <Header
        @onLangChange="changeLangHandler($event)"
        :lang="lang"
        :langData="getLangData('header')"
        :style="{backgroundColor: headerBg}"/>
    <FirstScreen
        :langData="getLangData('firstScreen')"/>
    <Software
        :langData="getLangData('software')"/>
    <Games
        :langData="getLangData('games')"/>
    <Future
        :langData="getLangData('future')"/>
    <Team
        :langData="getLangData('team')"/>
    <Footer
        :langData="getLangData('footer')"/>
  </div>
</template>

<script>
import Header from "./components/sections/Header"
import FirstScreen from "./components/sections/FirstScreen"
import Software from "./components/sections/Software"
import Games from "./components/sections/Games"
import Future from "./components/sections/Future"
import Team from "./components/sections/Team"
import Footer from "./components/sections/Footer"

export default {
  name: "App",
  components: {
    FirstScreen,
    Header,
    Software,
    Games,
    Future,
    Team,
    Footer,
  },
  data() {
    return {
      lang: this.getCookie("lang"),
      headerBg: ''
    };
  },
  computed: {},
  methods: {

    getLangData(section) {
      if (this.lang === "ru") {
        return this.$store.getters[`${section}/ru`];
      } else {
        return this.$store.getters[`${section}/en`];
      }
    },

    changeLangHandler(lang) {
      this.lang = lang;
      this.setCookie("lang", lang);
    },

    getCookie(name) {
      let matches = document.cookie.match(
          new RegExp(
              "(?:^|; )" +
              name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") +
              "=([^;]*)"
          )
      );
      return matches ? decodeURIComponent(matches[1]) : undefined;
    },

    setCookie(name, value, options = {}) {
      options = {
        path: "/",
        samesite: "Strict",
        // при необходимости добавьте другие значения по умолчанию
        ...options,
      };

      if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
      }

      let updatedCookie =
          encodeURIComponent(name) + "=" + encodeURIComponent(value);

      for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
          updatedCookie += "=" + optionValue;
        }
      }

      document.cookie = updatedCookie;
    },

    changeHeaderBg(el) {
      if (el.id === 'firstScreen') {
        this.headerBg = 'transparent'
      } else if (el.id === 'games' || el.id === 'team') {
        this.headerBg = '#212139'
      } else {
        this.headerBg = '#171727'
      }
    }
  },

    created() {
        if (!this.getCookie("lang")) {
            this.setCookie("lang", "en");
        }
    },
    mounted() {
    this.gsap.utils.toArray(".panel").forEach((panel) => {
      this.ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
        onEnter: (tr) => {
          this.changeHeaderBg(tr.trigger)
        },
        onEnterBack: (tr) => {
          this.changeHeaderBg(tr.trigger)
        }
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
  color: #d9d9d9

.container
  padding: 0 300px

#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

section
  height: 100vh
  padding: 50px 0

.section__title
  font-size: 40px
</style>
