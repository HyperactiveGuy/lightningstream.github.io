import Vue from 'vue';
import App from './App.vue';
import WrongAnswer from './pages/WrongAnswer.vue';
import Access from './pages/Access.vue';
import CheckLogin from './pages/CheckLogin.vue';
import ComputerRiddle from './pages/ComputerRiddle.vue';
import ClockRiddle from './pages/ClockRiddle.vue';
import CloudRiddle from './pages/CloudRiddle.vue';
import CommonRiddle from './pages/CommonRiddle.vue';
import LastRiddle from './pages/LastRiddle.vue';
import RealLastRiddle from './pages/RealLastRiddle.vue';
import Final from './pages/Final.vue';
import VueRouter from 'vue-router';

Vue.config.productionTip = false


Vue.use(VueRouter)

export const routes = [
  {path:'/gangsterdrink', component:CheckLogin},
  {path:"/Access/6338369", component:Access},
  {path:"/Access/5852329", component:ComputerRiddle},
  {path:"/Access/6047672", component:ClockRiddle},
  {path:"/Access/7288883", component:CloudRiddle}, 
  {path:"/Access/1327750", component:CommonRiddle}, 
  {path:"/Access/1589115", component:LastRiddle}, 
  {path:"/Access/1831427", component:RealLastRiddle}, 
  {path:"/Access/7189826", component:Final},
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
