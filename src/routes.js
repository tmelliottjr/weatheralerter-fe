import Subscribe from './components/Subscribe.vue'
import SubscribeSuccess from './components/SubscribeSuccess.vue'
import Verify from './components/Verify.vue'

export const routes = [
  { path: '', name: 'home', component: Subscribe },
  { path: '/subscribe/verify', name: 'verify', component: Verify},
  { path: '/success', name: 'subscribe-success', component: SubscribeSuccess},
  { path: '*', components: Subscribe}
]