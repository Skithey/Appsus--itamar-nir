import { notesService } from '../services/notes-service.js'


export default {
    template: `
    <section>
    <input type="color">
    <button @click="addImg">Img</button>
    <button @click="removeNote">Delete</button>
 
    </section>
    `,
    props: ['note'],
    data() {
        return {
            url: ''
        }
    },
    methods: {
        addImg() {
            console.log('sending img');

            this.$emit('getImg')
        },
        removeNote() {
            console.log('sending note');
            // console.log(this.note);
            let newNoteList = notesService.removeNote(this.note)


            this.$emit('getNewNotes', newNoteList)
        }
    }



}