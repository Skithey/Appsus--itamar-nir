import { utilsService } from '../../utils/utils-service.js'

export const notesService = {
    getNotes,
    addNote,
    getNoteForm
}


var gNotes = [{
        id: utilsService.getRandomId(),
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: utilsService.getRandomId(),
        type: "NoteImg",
        info: {
            url: "http://some-img/me",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: utilsService.getRandomId(),
        type: "NoteTodos",
        info: {
            label: "How was it:",
            todos: [{
                    txt: "Do that",
                    doneAt: null
                },
                {
                    txt: "Do this",
                    doneAt: 187111111
                }
            ]
        }
    },

];


function getNotes() {
    if (!localStorage.NOTES || !localStorage.NOTES.length) {
        utilsService.saveToStorage('NOTES', gNotes)
        return Promise.resolve(gNotes)

    } else {
        const notes = utilsService.loadFromStorage('NOTES')
        return Promise.resolve(notes)
    }
}

function addNote(note, title, txt) {
    (title) ? note.info.title = title: note.info.title = '';
    (txt) ? note.info.txt = txt: note.info.txt = '';

    gNotes.unshift(note)
    utilsService.saveToStorage('NOTES', gNotes)
    console.log('new note list: ', gNotes, 'new note added: ', note)
        // return Promise.resolve(gNotes)
}

function getNoteForm() {
    return {
        id: '',
        type: "NoteText",
        isPinned: true,
        info: {
            title: '',
            txt: ''
        }
    }
}