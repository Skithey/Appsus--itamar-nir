import editorNav from './editor-nav.cmp.js'

export default {
    template: `
    <div class="note-txt">
    <h2 v-if="info.title"> 
    {{info.title}}
    </h2>
    <textArea>{{info.txt}} </textArea>
    <editor-nav></editor-nav>
    </div>
    `,
    props: ['info'],

    components: {
        editorNav
    },
}