import { idToRealId, addButtons } from './Utils.js'
import { Display } from './Display.js'

const addDeleteButtons = function(app, data) {
    addButtons(app, data, deleteButton)
}

const deleteButton = function(app, data, id) {
    const noteDeleteButton = document.createElement('i')

    noteDeleteButton.className = "bi bi-trash"
    noteDeleteButton.id = "delete-${note.id}"
    noteDeleteButton.addEventListener('click', deleteNote.bind(null, data, id))

    const noteApp = app.querySelector(`tr[id$='${id}']`)
    noteApp.append(noteDeleteButton)
}

const deleteNote = function(data, id) {
    data.notes.splice(idToRealId(data, id), 1)
    Display(data)
}

export {addDeleteButtons}