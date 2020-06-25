import { myRouter } from './routes.js';
import appHeader from './app-header.cmp.js';

new Vue({
    el: '#app',
    router: myRouter,
    template: `
    <div>
    <app-header/>
    <router-view/>
    <main></main>
    <footer class="main-footer">cofferights 2020</footer>
    </div>
    `,
    components: {
        appHeader
    }
})