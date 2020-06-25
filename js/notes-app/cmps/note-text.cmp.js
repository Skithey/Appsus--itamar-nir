import editorNav from './editor-nav.cmp.js'

export default {
    template: `
    <div class="note-txt">
    <h2 v-if="info.title"> 
    {{info.title}}
    </h2>    
    <textArea ref="textAreaObj" :value="value" @input="saveTxt" >{{info.txt}} </textArea>
    <editor-nav @getNewNotes="sendNewNotes" :note="note"></editor-nav>
    </div> 
    `,
    props: ['info', 'note'],
    data() {
        return {
            value: ''
        }
    },
    components: {
        editorNav
    },
    methods: {
        sendNewNotes(newNotes) {
            // console.log(newNotes);
            this.$emit('sendNewNotes', newNotes)
        },
        saveTxt() {
            let value = this.$refs.textAreaObj.value;


            this.$emit('NewTxt', value, this.note.id)
        }
    }
}