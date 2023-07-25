import { Display } from './Display.js'

const addDeleteButtons = function(app, data) {
    data.notes.map(function (element) {
        deleteButton(app, data, element.id)
    })
}

const deleteButton = function(app, data, id) {
    const noteApp = app.querySelector(`tr[id$='${id}']`)
    const noteDeleteButton = document.createElement('i')

    noteDeleteButton.className = "bi bi-trash"
    noteDeleteButton.id = "delete-${note.id}"
    
    noteDeleteButton.addEventListener('click', deleteNote.bind(null, data, id))
    noteApp.append(noteDeleteButton)
}

const deleteNote = function(data, id, evt) {
    data.notes.splice(idToRealId(data, id), 1)
    Display(data)
}

const idToRealId = function(data, id) {
    console.log(data)
    return data.notes.findIndex((element) => element.id == id)
}

export {addDeleteButtons}