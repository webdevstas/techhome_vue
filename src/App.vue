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
        :langData="getLangData('software')"
        :client-width="clientWidth"
    />
    <Games
        :langData="getLangData('games')"
        :is-mobile="isMobile"
    />
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
      lang: '',
      headerBg: '',
      clientWidth: document.documentElement.getBoundingClientRect().width,
    };
  },

  computed: {
    isMobile()  {return this.clientWidth < 768}
  },

  methods: {
    /**
     * Получение из store локализованных данных
     * @param {string} section
     * @returns {Object} Объект локализованных данных
     */
    getLangData(section) {
      if (this.lang === "ru") {
        return this.$store.getters[`${section}/ru`];
      } else {
        return this.$store.getters[`${section}/en`];
      }
    },

    /**
     * Функция смены языка, устанавливает локальное свойство this.lang и устанавливает куку
     * @param {string} lang
     */
    changeLangHandler(lang) {
      this.lang = lang;
      this.setCookie("lang", lang);
    },

    /**
     * Функция получения значения куки
     * @param {string} name
     * @returns {string|undefined}
     */
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

    /**
     * Функция устанавливает куку
     * @param {string} name
     * @param {string|number} value
     * @param {Object} options
     */
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

    /**
     * Функция изменения цвета header в зависимости от секции
     * @param {Element} el
     */
    changeHeaderBg(el) {
      if (el.id === 'firstScreen') {
        this.headerBg = '#171727'
      } else if (el.id === 'games' || el.id === 'team') {
        this.headerBg = '#212139'
      }
      else if (el.id === 'software') {
        this.headerBg = '#000'
      }
      else {
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

    this.lang = this.getCookie("lang")

    this.gsap.utils.toArray(".panel").forEach((panel) => {
      this.ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
        anticipatePin: 0.5,
        onEnter: (tr) => {
          this.changeHeaderBg(tr.trigger)
        },
        onEnterBack: (tr) => {
          this.changeHeaderBg(tr.trigger)
        }
      })
    })

    window.addEventListener('resize', () => {
      const rect = document.documentElement.getBoundingClientRect()
      this.clientWidth = rect.width
    })
  },
}
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
  overflow-x: hidden

.container
  padding: 0 300px

#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

section
  height: 100vh
  padding: 60px 0

.section__title
  font-size: 24px
  text-align: center

.red
  display: inline !important
  color: rgb(220, 72, 62)

@media (max-width: 1200px)
  .container
    padding: 0 100px

@media (max-width: 992px)
  .container
    padding: 0 50px

@media (max-width: 768px)
  .container
    padding: 0 20px

@media (max-width: 576px)
  section
    padding-top: 30px

</style>
