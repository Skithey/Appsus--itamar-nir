export default {
    template: `
    <header>
        <nav class="app-header flex space-between align-center">
        <a class="main-a">Appsus!</a>
        <div class="routs-container flex space-between">
        <router-link class="underline no-list router-a" to="/email"> Email </router-link> 
        <router-link class="underline no-list router-a" to="/notes"> Notes </router-link> 
        <router-link class="underline no-list router-a" to="/books"> Books </router-link>
        </div>
        </nav>
    </header>`,
};