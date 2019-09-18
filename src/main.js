import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource';
Vue.use(VueResource);
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) },
  
}).$mount('#app')
