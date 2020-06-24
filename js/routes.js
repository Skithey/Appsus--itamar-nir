import emailApp from './email-app/Pages/email-app.js'
import notesApp from './notes-app/Pages/notes-app.js'
import booksApp from './books-app/Pages/book-app.js'


const myRoutes = [{
        path: '/email',
        component: emailApp
    },
    {
        path: '/notes',
        component: notesApp
    },
    {
        path: '/books',
        component: booksApp
    }
]
export const myRouter = new VueRouter({ routes: myRoutes })