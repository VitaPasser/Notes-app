import { idToRealId } from './Utils.js'
import { Display } from './Display.js'

const addDeleteButtons = function(app, data, conf) {
    data.notes.map(function (element) {
        deleteButton(app, data, element.id, conf)
    })
}

const deleteButton = function(app, data, id, conf) {
    const noteDeleteButton = document.createElement('i')

    noteDeleteButton.className = "bi bi-trash"
    noteDeleteButton.id = `delete-${id}`
    noteDeleteButton.addEventListener('click', deleteNote.bind(null, data, id, conf))

    const noteApp = app.querySelector(`tr[id$='${id}']`)
    if ( noteApp == null ) return;
    noteApp.append(noteDeleteButton)
}

const deleteNote = function(data, id, conf) {
    data.notes.splice(idToRealId(data, id), 1)
    Display(data, conf)
}

export {addDeleteButtons}