import { myRouter } from './routes.js';
import appHeader from './email-app/cmps/app-header.cmp.js';

new Vue({
    el: '#app',
    router: myRouter,
    template: `
    <div>
    <app-header/>
    <router-view/>
    <footer class="main-footer">cofferights 2020</footer>
    </div>
    `,
    components: {
        appHeader
    }
})