import editorNav from './editor-nav.cmp.js'
export default {

    template: `
    
    <div class="note-todods" v-bind:style="note.style">
    <ul>
    <li v-for=" todo in info.todos">
    <h2 v-if="info.title"> 
    {{info.title}}
    </h2>
    <p>{{todo.txt}}</p>

    </li>
    </ul>
    <editor-nav @getColor="changeBgcColor" :note="note"></editor-nav>

    </div>`,
    props: ['info', 'note'],
    components: {
        editorNav
    },
    methods: {
        changeBgcColor(newColor) {
            this.note.style.backgroundColor = newColor
            this.$emit('newColor', newColor, this.note.id)
                // console.log(this.note.style.backgroundColor);

        }
    }
}