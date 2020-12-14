import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mint from 'mint-ui';
import 'lib-flexible'
import 'mint-ui/lib/style.css'
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';

NutUI.install(Vue);
Vue.use(Mint);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
