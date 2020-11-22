import Vue from 'vue';
import App from './App.vue';
import WrongAnswer from './pages/WrongAnswer.vue';
import Access from './pages/Access.vue';
import HelloWorld from './components/HelloWorld.vue';
import CheckLogin from './pages/CheckLogin.vue';
import VueRouter from 'vue-router';

Vue.config.productionTip = false


Vue.use(VueRouter)

export const routes = [
  {path:'/gangsterdrink', component:CheckLogin},
  {path:"/Access/123456", component:Access},
  {path:"/Access/1234567", component:HelloWorld},
  {path:"*", component:WrongAnswer}
];


const router = new VueRouter({
  routes,
  mode:'history'
});
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
