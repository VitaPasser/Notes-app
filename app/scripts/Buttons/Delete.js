import { deleteNote } from "../Service/Delete.js"
import { addButtons } from "./Buttons.js"

const addDeleteButtons = (app, data, conf) =>
    addButtons(app, data, conf, deleteButton)

const deleteButton = function (app, data, id, conf) {
    const noteDeleteButton = document.createElement('i')

    noteDeleteButton.className = "bi bi-trash"
    noteDeleteButton.id = `delete-${id}`
    noteDeleteButton.addEventListener('click', deleteNote.bind(null, data, id, conf))

    const noteApp = app.querySelector(`tr[id$='${id}']`)
    if (noteApp == null) return;
    noteApp.append(noteDeleteButton)
}

export { addDeleteButtons }