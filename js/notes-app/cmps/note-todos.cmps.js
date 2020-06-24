export default {

    template: `
    
    <div class="note-todods">
    <ul>
    <li v-for=" todo in info.todos">
    {{todo.txt}}
    </li>
   
    </ul>
    </div>`,
    props: ['info'],

}