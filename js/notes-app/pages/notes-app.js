import NoteText from '../cmps/note-text.cmp.js'
import NoteImg from '../cmps/note-img.cmp.js'
import NoteTodos from '../cmps/note-todos.cmps.js'
import editorNav from '../cmps/editor-nav.cmp.js'
import { notesService } from '../services/notes-service.js'


export default {
    template: `
    <div>
    <h2>Notes-app</h2>
    <form v-if="type==='NoteText'" class="add-section" @submit.prevent="addTextNote">
    <input type="text" placeholder="Title" v-model="titleVal">
    <input type="text" placeholder="Add a note here!" v-model="txtVal">
    <button  >Add</button>
    <br>
    <br> 
    </form>
    <form v-if="type==='NoteImg'" @submit.prevent="addImgNote">
    <input type="text" placeholder="Place img url here" v-model="imgUrl">
    <button>Add</button>
    <br>
    <br> 
    </form>
    <form v-if="type==='NoteTodos'">
    #work in progress#
    <br>
    <br> 
    </form>
    <button @click="ChangeTypeToImg">Add pic</button>
    <button @click="ChangeTypeToTxt">Add text</button>
    <button @click="ChangeTypeToTodos">Add list</button>


   <section class="notes-container grid">
    <div  v-for=" note in notes" :key="note.id">
        <component  @newColor="changeBgcColor"  @NewTxt="ChangeTxt" @sendNewNotes="renderNotes" :is="note.type" class="note" :note="note" :info="note.info" ></component>
    </div>
    </section>

    </div>
    `,
    data() {
        return {
            type: 'NoteText',
            noteToSave: notesService.getNoteForm(),
            titleVal: '',
            txtVal: '',
            imgUrl: '',
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
                this.notes = notes
            })
    },
    methods: {
        addTextNote() {
            this.noteToSave.type = this.type
            this.noteToSave.title = this.titleVal
            this.noteToSave.info.txt = this.txtVal
            console.log(this.noteToSave);

            notesService.addNote(this.noteToSave)
                .then(notes => this.notes = notes)
            this.noteToSave = notesService.getNoteForm()
            this.titleVal = ''
            this.txtVal = ''
        },

        addImgNote() {
            this.noteToSave.type = this.type
            this.noteToSave.info.url = this.imgUrl
                // console.log(this.imgUrl);
            console.log(this.noteToSave)
            notesService.addNote(this.noteToSave)
                .then(notes => {

                    this.notes = notes
                })
            this.noteToSave = notesService.getNoteForm()
            this.imgUrl = ''

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

        },
        changeBgcColor(newColor, noteId) {
            notesService.getById(noteId)
                .then(noteIdx => {
                    notesService.changeNoteBgc(newColor, noteIdx)
                    this.notes[noteIdx].style.backgroundColor = newColor
                })
        },
        ChangeTypeToImg() {
            this.type = 'NoteImg'
                // console.log(this.type);

        },
        ChangeTypeToTodos() {
            this.type = 'NoteTodos'
                // console.log(this.type);
        },
        ChangeTypeToTxt() {
            this.type = 'NoteText'
                // console.log(this.type);
        },

    }
}