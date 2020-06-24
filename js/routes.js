import emailApp from './email-app/Pages/email-app.js'
import notesApp from './notes-app/Pages/notes-app.js'


const myRoutes = [{
        path: '/email',
        component: emailApp
    },
    {
        path: '/notes',
        component: notesApp
    }
]
export const myRouter = new VueRouter({ routes: myRoutes })