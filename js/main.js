import { myRouter } from './routes.js';
import appHeader from './email-app/cmps/app-header.cmp.js';
import appFooter from './email-app/cmps/app-footer.cmp.js';

new Vue({
    el: '#app',
    router: myRouter,
    template: `
    <div>
    <app-header/>
    <router-view/>
    <div>
    <app-footer/>
    </div>
    </div>
    `,
    components: {
        appHeader,
        appFooter
    }
})