import { notesService } from '../services/notes-service.js'


export default {
    template: `
    <section class="editor-nav">
    <input type="color" v-model="bgcColor" @input="changeBgcColor">
    <button @click="removeNote">Delete</button>
    </section>
    `,
    // <input class="img-from-user" type="file" name="image" @change="onImgInput" />
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
            console.log('sending note');
            // console.log(this.note);
            let newNoteList = notesService.removeNote(this.note)


            this.$emit('getNewNotes', newNoteList)
        },
        changeBgcColor() {
            this.$emit('getColor', this.bgcColor)


        },

    }

}