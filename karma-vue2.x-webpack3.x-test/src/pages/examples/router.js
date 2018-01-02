import HelloWorld from '@/HelloWorld';

Vue.use(VueRouter);

console.log('VueRouter', VueRouter);
export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
});
