// import { myRouter } from './routes.js'
// import '../Pages/book-app.cmp.js'

export default ({
    template: `
    <div>
    <header class="header">
    <div class="container flex align-center space-between">
    <h1 class="headline ">Awesome Book-Shop</h1>
    <nav class="nav-bar">
    <router-link to="/books/homePage" class="nav-btn">Home Page</router-link> |
    <router-link to="/books/book+list" class="nav-btn">Book List</router-link> |
    <router-link to="/books/about" class="nav-btn">About us</router-link> 
    </nav>
    </div>
    </header>
    <router-view />
    </div>
    `
        // <book-app></book-app>
})

/* <footer class="footer flex justify-center align-center"> all rights reserved 2020</footer> */