import { archiveNote } from "../../Service/Archive.js"
import { addButtons } from "./Buttons.js"

const addArchiveButtons = (app, data, config) =>
    addButtons(app, data, config, archiveButton)

const archiveButton = function (app, data, id, config) {
    const noteApp = app.querySelector(`tr[id$='${id}']`)
    if (noteApp == null) return;
    const noteArchiveButton = document.createElement('i')

    noteArchiveButton.className = "bi bi-archive"
    noteArchiveButton.id = `archive-${id}`

    noteArchiveButton.addEventListener('click', archiveNote.bind(null, data, id, config))
    noteApp.append(noteArchiveButton)
}

export { addArchiveButtons }