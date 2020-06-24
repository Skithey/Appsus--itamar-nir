import { myRouter } from './routes.js'

new Vue({
    el: '#app',
    router: myRouter,
    template: `
    <div>
    <h1> Hello Apsus</h1>
    <router-link to="/email"> Email </router-link> |
    <router-link to="/notes"> Notes </router-link> |
    <router-link to="/books"> Books </router-link>
    <router-view/>
    </div>`
})