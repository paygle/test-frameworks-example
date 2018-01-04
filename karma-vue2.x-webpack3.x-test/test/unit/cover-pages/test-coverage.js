// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '@/App';
import HelloWorld from '@/HelloWorld';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
});

console.log('Test Main !!!!!!');

/* eslint-disable no-new */
new Vue({
  el: '#test-coverage',
  router,
  template: '<App/>',
  components: { App }
});
