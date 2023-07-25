import { idToRealId, addButtons } from './Utils.js'
import { Display } from './Display.js'

const addChangeButtons = function(app, data) {
    addButtons(app, data, changeButton)
}

const changeButton = function(app, data, id) {
    const noteApp = app.querySelector(`tr[id$='${id}']`)
    const noteChangeButton = document.createElement('i')

    noteChangeButton.className = "bi bi-pencil-square"
    noteChangeButton.id = "change-${note.id}"
    
    noteChangeButton.addEventListener('click', changeNote.bind(null, data, id))
    noteApp.append(noteChangeButton)
}

const changeNote = function(data, id, evt) {
    data.notes[idToRealId(data, id)] = {
        "id": id,
        "created_at": "05/03/2023",
        "content": "Test.",
        "category_id": 0,
        "date": []
    }
    Display(data)
}

export { addChangeButtons }