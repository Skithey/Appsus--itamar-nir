// import about from '../../../img/books-imgs-gifs/main-area-pic.jpg';


export default {
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
    <section class="home-page container flex column align-center">
    <h1>Welcome to the Awesome Book-Shop</h1>
    
    <section class="main-area-container grid">
    <div class="side-bar flex column space-around bar-container">
    <h2> random headline </h2>
    <p>
    Lorem ipsum dolor sit amet semper erat  Ut vestibulum iaculis gravida. Donec turpis nibh, maximus sed eleifend eget, imperdiet id nisl. Cras sed est lorem. Maecenas laoreet tellus neque, et cursus lorem luctus vel. Mauris dictum cursus ex vel molestie. Donec sagittis vestibulum eros, in auctor felis pellentesque ut. Integer pellentesque ultrices aliquam. Ut lacinia, velit eget cursus interdum, dolor tellus mollis ante, blandit dignissim ligula lacus quis ligula.
    </p>
    <button class="btn read-more-homepage">Read more</button>
    </div>
    
    <div class="main-img ">
    <img  src="../../../img/books-imgs-gifs/main-area-pic.jpg" alt="">
    </div>
    <div class="mid-container bar-container flex align-center justify-center">
    <p>Lorem ipsum dolor sit amet semper erat  Ut vestibulum iaculis gravida. Donec turpis nibh, maximus sed eleifend eget, </p> <span>read more...</span>
    
    </div>
    <h2 class="book-display-header">Our most popular books:</h2>
    
    
    <div class="book-display1 book-display bar-container flex column space-around align-center">
    <img class="book-display-img" src="../../../img/books-imgs-gifs/img 1.jpg" width="250px" height="350px">
    
    <p>lorem ipsom</p>
    
    <button class="book-more btn">For more</button>
    </div>
    
    
    <div class="book-display2 book-display bar-container flex column space-around align-center">
    <img class="book-display-img" src="../../../img/books-imgs-gifs/img 1.jpg" width="250px" height="350px">
    
    <p>lorem ipsom</p>
    
    <button class="book-more btn">For more</button>
    </div>
    
    
    <div class="book-display3 book-display bar-container flex column space-around align-center">
    <img class="book-display-img" src="../../../img/books-imgs-gifs/img 1.jpg" width="250px" height="350px">
    
    <p>lorem ipsom</p>
    
    <button class="book-more btn">For more</button>
    </div>
    
    
    
    </section>
    
    </section>
    </div>
    `
}