import { drawUpdateForm } from "../../Service/UpdateRedirect.js"
import { addButtons } from "./Buttons.js"

const addChangeButtons = (app, data, conf) =>
    addButtons(app, data, conf, changeButton)

const changeButton = function (app, data, id, conf) {
    const nodeNote = app.querySelector(`tr[id$='${id}']`)
    if (nodeNote == null) return;
    const nodeChangeButton = document.createElement('i')

    nodeChangeButton.className = "bi bi-pencil-square"
    nodeChangeButton.id = `change-${id}`

    nodeChangeButton.addEventListener('click', drawUpdateForm.bind(null, data, conf, id))
    nodeNote.append(nodeChangeButton)
}

export { addChangeButtons }