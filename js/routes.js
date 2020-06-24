import emailApp from './email-app/Pages/email-app.js'
import notesApp from './notes-app/Pages/notes-app.js'
import emailDetails from './email-app/Pages/email.details.cmp.js'


const myRoutes = [{
        path: '/email',
        component: emailApp
    },
    {
        path: '/notes',
        component: notesApp
    },
    {
        path: '/email/:emailId',
        component: emailDetails
    }
]
export const myRouter = new VueRouter({ routes: myRoutes })