// import sadas from '../../../img/books-imgs-gifs/about-pic.webp'

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
    <div class="about-container container flex column ">
    <h1>ABOUT PAGE</h1>
    <section class="info-section flex row space-around align-center">
    <img src='../../../img/books-imgs-gifs/about-pic.webp' height="200px" width="200px" >
    
    <div class="flex column">
    <h2> Regina Phalange</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi amet consectetur, adipisicing elit. Animi deleniti! Velit in beatae nemo architecto magni corrupti eos, maxime nesciunt libero corporis totam, iure, repellat sit minima asperiores. Quibusdam, corrupti.</p>
    </div>
    </section>
    <div class="dream-bar flex column justify-center align-center"><p>Books are good company, in sad times and happy times, for books are people – people who have managed to stay alive by hiding between the covers of a book.”  </p> <br><span>– E.B. White</span></div>
    <div class="the-sum ">
    <h2>Last Title</h2>
    <div class="last-para flex row space-between">
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,Lorem ipsum dolor sit Lorem ipsum dolor s </p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,Lorem ipsum dolor sit Lorem ipsum dolor s Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,Lorem ipsum dolor sit Lorem ipsum dolor s</p>
    </div>
    
    <div class="social-btns flex justify-center">
    <button class="soc-btn">A</button>
    <button class="soc-btn">X</button>
    <button class="soc-btn">C</button>
    </div>
    </div>
    </div>
    </div>
    
    `,
    // methods: {
    //     intervalClear: clearInterval(intervalId)
    // },
    // created() {
    //     var intervalId = setInterval(() => {
    //         console.log('lala');
    //     }, 1000)
    // }
}