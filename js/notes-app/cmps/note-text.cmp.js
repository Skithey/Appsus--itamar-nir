import editorNav from './editor-nav.cmp.js'

export default {
    template: `
    <div class="note-txt">
    <h2 v-if="info.title"> 
    {{info.title}}
    </h2>
    <textArea>{{info.txt}} </textArea>
    <editor-nav :note="note"></editor-nav>
    </div>
    `,
    props: ['info', 'note'],

    components: {
        editorNav
    },
}