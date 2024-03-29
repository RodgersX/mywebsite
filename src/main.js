import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

// global components
import About from './components/About.vue' 
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import Experience from './components/Experience.vue'

Vue.config.productionTip = false

Vue.component('AboutPage', About)
Vue.component('SkillsPage', Skills)
Vue.component('Contact', Contact)
Vue.component('Footer', Footer)
Vue.component('Experience', Experience)

Vue.use(VueScrollTo)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
