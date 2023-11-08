import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from "axios";
import MyPlugin from './lib/Myplugin'
import VueAnimate from 'vue-animate-scroll'
import VueScrollTo from 'vue-scrollto';
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

Vue.use(MyPlugin)
Vue.use(VueAnimate)
Vue.use(VueScrollTo)

new Vue({
  router,
  vuetify,  
  axios,
  render: h => h(App),
  mounted() {
    AOS.init({
    })
  },
}).$mount('#app')
