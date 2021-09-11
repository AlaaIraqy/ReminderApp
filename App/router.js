
import { TaskPage } from './view/pages/task.page.js'
import { ReminderPage } from './view/pages/reminder.page.js'
import { App } from './view/app.js'
import { PrayerPage } from './view/pages/prayer.page.js'
window.onhashchange  = function(){
    App()
}
window.onload = ()=>{
    App()
}
export function AppRouter(){
    let hash = window.location.hash
    let selectedComponent = ()=>{};
    let routers = [
        { path: '#tasks', component: TaskPage},
        { path: '#reminders', component: ReminderPage},
        { path: 'prayers', component: PrayerPage}
    ]
    for(let route of routers){
        hash === route.path ? selectedComponent = route.component  : false
    }
    return selectedComponent()
}