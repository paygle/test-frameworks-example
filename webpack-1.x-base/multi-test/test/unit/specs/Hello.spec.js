import Vue from 'vue'
import Hello from 'packages/Hello-world'

Vue.config.devtools = true;

debugger
describe('Hello.vue', () => {
  debugger
  console.log('Test Step-> A', Hello);
  it('should render correct contents', (done) => {
    console.log('Test Step-> B');

    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    console.log('Test Step-> C', vm);

    vm.$nextTick(function () {
      // Code that will run only after the
      // entire view has been re-rendered
      console.log('Test Step-> D', vm.$el.querySelector('.hello h1'));
debugger;
      expect(vm.$el.querySelector('.hello h1').textContent)
        .to.equal('Welcome to Your Vue.js App Test')
        console.log('Test Step-> E', vm.$el.querySelector('.hello h1').textContent);
        done(); //异步代码
    });
  })
})
