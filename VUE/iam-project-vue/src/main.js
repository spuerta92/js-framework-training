import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { createWebHistory, createRouter } from 'vue-router'
import Main from './components/Main.vue'
import Views from './components/Views.vue'
import CoverLetter from './components/CoverLetter.vue'
import Certifications from './components/Certifications.vue'
import Repositories from './components/Repositories.vue'
import Applications from './components/Applications.vue'
import Testing from './components/Testing.vue'

const routes = [
  { path: '/', name: 'Home', component: Main },
  { path: '/views', name: 'Views', component: Views },
  { path: '/coverletter', name: 'Cover Letter', component: CoverLetter },
  { path: '/certifications', name: 'Views', component: Certifications },
  { path: '/repositories', name: 'Views', component: Repositories },
  { path: '/applications', name: 'Views', component: Applications },
  { path: '/testing', name: 'Views', component: Testing }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
.use(router)
.mount('#app')
