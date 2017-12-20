// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App';
import router from './router';

Vue.config.productionTip = false;
// console.log(ELEMENT);
// Vue.use(ELEMENT, { size: 'small' });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
