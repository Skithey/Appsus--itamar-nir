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
    <button  >Add</button>
    <br>
    <br> 
    </form>
   <section class="notes-container grid">
    <div  v-for=" note in notes" :key="note.id">
        <component @NewTxt="ChangeTxt" @sendNewNotes="renderNotes" :is="note.type" class="note" :note="note" :info="note.info"></component>
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
        NoteText,
        NoteImg,
        NoteTodos,
        editorNav,

    },
    created() {
        notesService.getNotes()
            .then(notes => {
                // console.log(notes);

                this.notes = notes
            })
    },
    methods: {
        addNote() {
            this.noteToSave.title = this.titleVal
            this.noteToSave.info.txt = this.txtVal
                // this.notes.unshift(this.noteToSave)
            notesService.addNote(this.noteToSave)
            this.noteToSave = notesService.getNoteForm()
            this.titleVal = ''
            this.txtVal = ''
        },
        renderNotes(NewNoteList) {
            this.notes = NewNoteList
        },
        ChangeTxt(newTxt, noteId) {
            notesService.getById(noteId)
                .then(noteIdx => {
                    notesService.addTxtToNote(newTxt, noteIdx)
                    this.notes[noteIdx].info.txt = newTxt

                })

        }
    }
}