import { notesService } from '../services/notes-service.js'


export default {
    template: `
    <section class="editor-nav">
    <input type="color" v-model="bgcColor" @input="changeBgcColor">
    <button @click="removeNote">Delete</button>
    </section>
    `,
    props: ['note'],
    data() {
        return {
            url: '',
            bgcColor: '#ffff'
        }
    },
    methods: {
        addImg() {
            console.log('sending img');

            this.$emit('getImg')
        },
        removeNote() {
            let newNoteList = notesService.removeNote(this.note)
            this.$emit('getNewNotes', newNoteList)
        },
        changeBgcColor() {
            this.$emit('getColor', this.bgcColor)
        },
    }
}