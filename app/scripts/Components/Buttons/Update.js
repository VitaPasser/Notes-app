import { drawUpdateForm } from "../../Service/UpdateRedirect.js"
import { addButtons } from "./Buttons.js"

const addChangeButtons = (app, data, config) =>
    addButtons(app, data, config, changeButton)

const changeButton = function (app, data, id, config) {
    const nodeNote = app.querySelector(`tr[id$='${id}']`)
    if (nodeNote == null) return;
    const nodeTd = document.createElement('td')
    const nodeChangeButton = document.createElement('i')

    nodeChangeButton.className = "bi bi-pencil-square"
    nodeChangeButton.id = `change-${id}`

    nodeChangeButton.addEventListener('click', drawUpdateForm.bind(null, data, config, id))

    nodeTd.append(nodeChangeButton)
    nodeNote.append(nodeTd)
}

export { addChangeButtons }