import { deleteNote } from "../../Service/Delete.js"
import { addButtons } from "./Buttons.js"

const addDeleteButtons = (app, data, config) =>
    addButtons(app, data, config, deleteButton)

const deleteButton = function (app, data, id, config) {
    const nodeTd = document.createElement('td')
    const noteDeleteButton = document.createElement('i')

    noteDeleteButton.className = "bi bi-trash"
    noteDeleteButton.id = `delete-${id}`
    noteDeleteButton.addEventListener('click', deleteNote.bind(null, data, id, config))

    const noteApp = app.querySelector(`tr[id$='${id}']`)
    if (noteApp == null) return;
    nodeTd.append(noteDeleteButton)
    noteApp.append(nodeTd)
}

export { addDeleteButtons }