import { createApp } from 'vue'
import App from './App.vue'
import Hello1 from './components/Hello1.vue'
import {createWebHashHistory,createRouter} from 'vue-router'
import './index.css'


const history=createWebHashHistory()
const router=createRouter({
    history:history,
    routes:[{
        path:'/',component:Hello1
    }]
})

const app=createApp(App)
app.use(router)
app.mount('#app')
