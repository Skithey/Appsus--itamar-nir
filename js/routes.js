import emailApp from './email-app/Pages/email-app.js'
import notesApp from './notes-app/Pages/notes-app.js'
import emailDetails from './email-app/Pages/email.details.cmp.js'
import bookApp from './books-app/Pages/main-books-page.js';
import bookDetails from './books-app/Pages/book-details.cmp.js';
import bookReview from './books-app/Pages/book-review.cmp.js';
import booksHomePage from './books-app/Pages/book-homePage.cmp.js'
import booksList from './books-app/Pages/book-app.cmp.js'
import booksAbout from './books-app/Pages/book-about.cmp.js'

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
    },
    {
        path: '/books',
        component: bookApp
    },
    {
        path: '/books/homePage',
        component: booksHomePage
    },
    {
        path: '/books/book+list',
        component: booksList
    },
    {
        path: '/books/about',
        component: booksAbout
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    }, {
        path: '/book/review/:bookId',
        component: bookReview
    }
]
export const myRouter = new VueRouter({ routes: myRoutes })