import Vue from 'vue';
import { Button, Select, Option } from 'element-ui';
import HelloWorld from '@/packages/HelloWorld';

Vue.use(Button);
Vue.use(Select);
Vue.use(Option);

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App');
  });
});
