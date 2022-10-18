import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false

const shared = {
  message: "my global message"
}

shared.install = function(){
  Object.defineProperty(Vue.prototype, '$myGlobalStuff', {
    get () { return shared }
  })
}

new Vue({
  vuetify,
  router,
  App,
  shared,
  render: h => h(App)
}).$mount('#app');
