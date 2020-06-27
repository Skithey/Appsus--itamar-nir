import editorNav from './editor-nav.cmp.js'

export default {
    template: `
    <div  class="note-txt" v-bind:style="note.style">
    <textArea  v-bind:style="note.style" class="header-area flex column " ref="titleObj" :value="titleValue" @input="saveTitle" >{{info.txt}} </textArea>

  
    <textArea  v-bind:style="note.style" class="note-text-area flex column " ref="textAreaObj" :value="txtValue" @input="saveTxt" >{{info.txt}} 
    </textArea>
    <editor-nav @getColor="changeBgcColor" @getNewNotes="sendNewNotes" :note="note"></editor-nav>
    </div> 
    `,
    props: ['info', 'note'],
    data() {
        return {
            titleValue: '',
            txtValue: '',

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
        saveTitle() {
            let value = this.$refs.titleObj.value;


            this.$emit('newTitle', value, this.note.id)
        },
        changeBgcColor(newColor) {
            this.note.style.backgroundColor = newColor
            this.$emit('newColor', newColor, this.note.id)

        }
    }
}