import { utilsService } from '../../utils/utils-service.js'

export const notesService = {
    getNotes,
    addNote,
    getNoteForm,
    removeNote,
    getById,
    addTxtToNote
}


const gNotes = (() => {
    var notes = utilsService.loadFromStorage('NOTES');
    if (!notes) {
        notes = getDefNotes();
        utilsService.saveToStorage('NOTES', notes);
    }
    return notes;
})()

function getDefNotes() {

    return [{
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

    ]
};


function getNotes() {
    if (!localStorage.NOTES || !localStorage.NOTES.length) {
        utilsService.saveToStorage('NOTES', gNotes)
        return Promise.resolve(gNotes)

    } else {
        const notes = utilsService.loadFromStorage('NOTES')
            // console.log(notes);

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
    // console.log('shwarma: ', noteToRemove)
    getById(noteToRemove.id)
        .then(note => {
            console.log('sabih: ', note)
            gNotes.splice(note, 1)
            utilsService.saveToStorage('NOTES', gNotes)
        })
        // console.log(gNotes);

    return gNotes
}

function getById(noteId) {
    const note = gNotes.findIndex(note => {
        // console.log('falafel: ', note.id);
        // console.log('shwarma: ', noteId)

        return note.id === noteId
    })

    return Promise.resolve(note)
}

function addTxtToNote(newTxt, noteIdx) {
    gNotes[noteIdx].info.txt = newTxt
    utilsService.saveToStorage('NOTES', gNotes)


}