import { idToRealId } from './Utils.js'
import { Display } from './Display.js'

const addArchiveButtons = function(app, data, conf) {
    data.notes.map(function (element) {
        archiveButton(app, data, element.id, conf)
    })
}

const archiveButton = function(app, data, id, conf) {
    const noteApp = app.querySelector(`tr[id$='${id}']`)
    if ( noteApp == null ) return;
    const noteArchiveButton = document.createElement('i')

    noteArchiveButton.className = "bi bi-archive"
    noteArchiveButton.id = `archive-${id}`
    
    noteArchiveButton.addEventListener('click', archiveNote.bind(null, data, id, conf))
    noteApp.append(noteArchiveButton)
}

const archiveNote = function(data, id, conf, evt) {
    const note = data.notes[idToRealId(data, id)]
    note.archived = !note.archived
    Display(data, conf)
}

export { addArchiveButtons }