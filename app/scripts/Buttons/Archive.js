import { archiveNote } from "../Service/Archive.js"
import { addButtons } from "./Buttons.js"

const addArchiveButtons = (app, data, conf) =>
    addButtons(app, data, conf, archiveButton)

const archiveButton = function (app, data, id, conf) {
    const noteApp = app.querySelector(`tr[id$='${id}']`)
    if (noteApp == null) return;
    const noteArchiveButton = document.createElement('i')

    noteArchiveButton.className = "bi bi-archive"
    noteArchiveButton.id = `archive-${id}`

    noteArchiveButton.addEventListener('click', archiveNote.bind(null, data, id, conf))
    noteApp.append(noteArchiveButton)
}

export { addArchiveButtons }