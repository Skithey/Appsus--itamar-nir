export default {

    template: `
    
    <div class="note-todods">
    <ul>
    <li v-for=" todo in info.todos">
    <h2 v-if="info.title"> 
    {{info.title}}
    </h2>
    <p>{{todo.txt}}</p>

    </li>
    </ul>
    
    </div>`,
    props: ['info'],

}