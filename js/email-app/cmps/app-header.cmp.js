export default {
    template: `
    <header class="header-container">
    <nav class="app-header flex space-between align-center container">
   <div class="flex align-center">
   <img class="header-logo" src="/img/horse.png" alt=""> 
   <router-link   to="/"> 
   <a @click="makeBgiVisible" class="main-appsus-logo">Appsus</a>
    </router-link> 

   
   </div>
   <div class="routs-container flex space-between">
   <router-link  class="nav-btn underline no-list router-a" to="/email"> Email </router-link> |
   <router-link  class="nav-btn underline no-list router-a" to="/notes"> Notes </router-link> |
   <router-link @click.native="makeBgiNone" class="nav-btn underline no-list router-a" to="/books/homePage"> Books </router-link>
   </div>
   </nav>
   </header>`,
    // data() {
    //     return {
    //         isVisible: null
    //     }
    // },
    methods: {
        makeBgiNone() {
            // this.isVisible = false
            this.$emit('makeBgiDisapper')


        },
        makeBgiVisible() {
            // this.isVisible = true
            this.$emit('makeBgiVisible')
        }
    }
};