import { utilsService } from '../../utils/utils-service.js'

export const notesService = {
    getNotes,
    addNote,
    getNoteForm,
    removeNote
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
        console.log(notes);

        return Promise.resolve(notes)
    }
}

function addNote(note) {
    console.log(note);


    gNotes.unshift(note)
    utilsService.saveToStorage('NOTES', gNotes)

    // console.log('new note list: ', gNotes, 'new   note added: ', note)
    // return Promise.resolve(gNotes)
}

function getNoteForm() {
    return {
        id: utilsService.getRandomId(),
        type: "NoteText",
        isPinned: true,
        info: {
            title: '',
            txt: ''
        }
    }
}

function removeNote(noteToRemove) {
    getById(noteToRemove.id)
        .then(note => {
            console.log(note)

        })

}

function getById(noteId) {
    // console.log(noteId)
    const note = gNotes.findIndex(note => {
        console.log(note.id);

        note.id === noteId
    })

    return Promise.resolve(note)
}