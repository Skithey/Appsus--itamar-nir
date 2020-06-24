import NoteText from '../cmps/note-text.cmp.js'
import NoteImg from '../cmps/note-img.cmp.js'
import NoteTodos from '../cmps/note-todos.cmps.js'
import editorNav from '../cmps/editor-nav.cmp.js'
import { notesService } from '../services/notes-service.js'
import { utilsService } from '../../utils/utils-service.js'

export default {
    template: `
    <div>
    <h2>Notes-app</h2>

    <form class="add-section" @submit.prevent="addNote">
    <input type="text" placeholder="Title" v-model="titleVal">
    <input type="text" placeholder="Add a note here!" v-model="txtVal">
    <button >Add</button>
    <editor-nav></editor-nav>
<br>
<br>
<br>
    </form>
   <section class="notes-container grid">
    <div  v-for=" note in notes" :key="note.id">
        <component  :is="note.type" class="note"  :info="note.info"></component>
    </div>
    </section>

    </div>
    `,
    data() {
        return {
            noteToSave: notesService.getNoteForm(),
            titleVal: '',
            txtVal: '',
            notes: []

        }
    },
    components: {
        notesService,
        utilsService,
        NoteText,
        NoteImg,
        NoteTodos,
        editorNav,

    },
    created() {

        notesService.getNotes()
            .then(notes => {
                this.notes = notes
            })
    },
    methods: {
        addNote() {
            notesService.addNote(this.noteToSave, this.titleVal, this.txtVal)

            this.titleVal = ''
            this.txtVal = ''
        }
    }
}