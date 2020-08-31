
import Home from "./views/home.vue";
import Doc from "./views/doc.vue";
import Switch from './components/SwitchDemo.vue'
import Button from './components/ButtonDemo.vue'
import Tabs from './components/Tabs.vue'
import Dialog from './components/DialogDemo.vue'

import {createWebHashHistory,createRouter} from 'vue-router'

const history=createWebHashHistory()


export const router=createRouter({
    history:history,
    routes:[{
        path:'/',component:Home
    },{
        path:'/doc',component:Doc,
        children:[{
            path:'/',component:Doc
        },
        {
            path:'switch',component:Switch
        },{
            path:'button',component:Button
        },{
            path:'tabs',component:Tabs
        },{
            path:'Dialog',component:Dialog
        }]
    }]
})