import { idToRealId } from './Utils.js'
import { Display } from './Display.js'

const addChangeButtons = function(app, data, conf) {
    data.notes.map(function (element) {
        changeButton(app, data, element.id, conf)
    })
}

const changeButton = function(app, data, id, conf) {
    const noteApp = app.querySelector(`tr[id$='${id}']`)
    if ( noteApp == null ) return;
    const noteChangeButton = document.createElement('i')

    noteChangeButton.className = "bi bi-pencil-square"
    noteChangeButton.id = `change-${id}`
    
    noteChangeButton.addEventListener('click', changeNote.bind(null, data, id, conf))
    noteApp.append(noteChangeButton)
}

const changeNote = function(data, id, conf, evt) {
    data.notes[idToRealId(data, id)] = {
        "id": id,
        "created_at": "05/03/2023",
        "content": "Test.",
        "category_id": 0,
        "date": [],
        "archived": false
    }
    Display(data, conf)
}

export { addChangeButtons }