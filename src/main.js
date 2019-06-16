import Vue from 'vue';
import App from './App.vue';
import iView from 'iview';
import router from './router';
import store from './store';
import '../my-theme/index.less';

Vue.use(iView);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
