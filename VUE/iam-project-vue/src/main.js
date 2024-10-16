import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { createWebHistory, createRouter } from 'vue-router'
import Home from './components/Home.vue'
import Views from './components/Views.vue'
import CoverLetter from './components/CoverLetter.vue'
import Certifications from './components/Certifications.vue'
import Repositories from './components/Repositories.vue'
import Applications from './components/Applications.vue'
import Testing from './components/Testing.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/views', name: 'Views', component: Views },
  { path: '/coverletter', name: 'Cover Letter', component: CoverLetter },
  { path: '/certifications', name: 'Certifications', component: Certifications },
  { path: '/repositories', name: 'Repositories', component: Repositories },
  { path: '/applications', name: 'Applications', component: Applications },
  { path: '/testing', name: 'Testing', component: Testing },
  { path: '', component: Home }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
.use(router)
.mount('#app')
