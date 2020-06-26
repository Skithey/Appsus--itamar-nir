export default {
    template: `
    <header class="header-container">
    <nav class="app-header flex space-between align-center container">
   <div class="flex align-center">
   <img class="header-logo" src="/img/horse.png" alt=""> 
   <a class="main-a">Appsus</a>
   
   </div>
   <div class="routs-container flex space-between">
   <router-link class="nav-btn underline no-list router-a" to="/email"> Email </router-link> |
   <router-link class="nav-btn underline no-list router-a" to="/notes"> Notes </router-link> |
   <router-link class="nav-btn underline no-list router-a" to="/books/homePage"> Books </router-link>
   </div>
   </nav>
   </header>`,
};
//    <router-link  to="/"> 
// </router-link> |