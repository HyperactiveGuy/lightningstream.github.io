import Vue from 'vue';
import App from './App.vue';
import WrongAnswer from './components/WrongAnswer.vue';
import VueRouter from 'vue-router'

Vue.config.productionTip = false


Vue.use(VueRouter)

export const routes = [
  {path:'',component:App},
  {path:'/wrong', component:WrongAnswer}
];

const router = new VueRouter({
  routes,
  mode:'history'
});
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
