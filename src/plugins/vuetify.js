import 'vuetify/dist/vuetify.min.css'
// import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'
// import '@/assets/styles/global.scss'

import Vue from 'vue'
import Vuetify from 'vuetify'
import VueI18n from 'vue-i18n'

Vue.use(Vuetify)
Vue.use(VueI18n)

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'es' // set locale
})

Vue.component('my-component', {
  methods: {
    changeLocale () {
      this.$vuetify.lang.current = 'es'
    }
  }
})

export default new Vuetify({
  theme: {
    themes: {
      light: {
        color1: '#020126',
        color2: '#042159',
        color3: '#F2E422',
        color4: '#F28A2E',
        color5: '#F23827'
      }
    }
  },
  lang: {
    locales: {
      i18n
    }
  },
  icons: {
    iconfont: 'fa'
  }
})

// https://color.adobe.com/es/trends/Game-design
