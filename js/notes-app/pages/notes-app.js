import NoteText from '../cmps/note-text.cmp.js'
import NoteImg from '../cmps/note-img.cmp.js'
import NoteTodos from '../cmps/note-todos.cmps.js'
import { notesService } from '../services/notes-service.js'
import { utilsService } from '../../utils/utils-service.js'

export default {
    template: `
    <div>
    <h2>Notes-app</h2>
    <p> working on it</p>
   
    <div class="grid" v-for=" note in notes" :key="note.id">
        <component  :is="note.type" class="note"  :info="note.info"></component>
    </div>

    </div>
    `,
    data() {
        return {
            notes: []

        }
    },
    components: {
        notesService,
        utilsService,
        NoteText,
        NoteImg,
        NoteTodos
    },
    created() {
        if (!localStorage.NOTES || !localStorage.NOTES.length)
            notesService.getNotes()
            .then(notes => {
                this.notes = notes

            })
        else this.notes = utilsService.loadFromStorage('NOTES')
    }
}