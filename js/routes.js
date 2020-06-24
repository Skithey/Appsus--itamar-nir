import emailApp from './email-app/Pages/email-app.js.js'


const myRoutes = [{
    path: '/email',
    component: emailApp
}]
export const myRouter = new VueRouter({ routes: myRoutes })