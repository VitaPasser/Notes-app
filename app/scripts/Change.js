import { Display } from './Display.js'

const addChangeButtons = function(app, data) {
    data.notes.map(function (element) {
        changeButton(app, data, element.id)
    })
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
    console.log(id)
    console.log(data)
    data.notes[idToRealId(data, id)] = {
        "id": id,
        "created_at": "05/03/2023",
        "content": "Test.",
        "category_id": 0,
        "date": []
    }
    Display(data)
}

const idToRealId = function(data, id) {
    console.log(data)
    return data.notes.findIndex((element) => element.id == id)
}

export { addChangeButtons }