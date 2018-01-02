import './example.scss';
import App from '@/App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#main-example',
  router,
  template: '<App/>',
  components: { App }
});
