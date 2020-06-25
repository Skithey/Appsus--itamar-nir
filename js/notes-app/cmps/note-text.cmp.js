import editorNav from './editor-nav.cmp.js'

export default {
    template: `
    <div  class="note-txt" v-bind:style="note.style">
    <h2 v-if="info.title"> 
    {{info.title}}
    </h2>    
    <textArea class="text-area flex column " ref="textAreaObj" :value="value" @input="saveTxt" >{{info.txt}} </textArea>
    <editor-nav @getColor="changeBgcColor" @getNewNotes="sendNewNotes" :note="note"></editor-nav>
    </div> 
    `,
    props: ['info', 'note'],
    data() {
        return {

            value: '',

        }
    },
    components: {
        editorNav
    },
    methods: {
        sendNewNotes(newNotes) {
            this.$emit('sendNewNotes', newNotes)
        },
        saveTxt() {
            let value = this.$refs.textAreaObj.value;


            this.$emit('NewTxt', value, this.note.id)
        },
        changeBgcColor(newColor) {
            this.note.style.backgroundColor = newColor
            this.$emit('newColor', newColor, this.note.id)

        }
    }
}