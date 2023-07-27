import { drawCreateForm } from "../../Service/CreateRedirect.js"

const createButton = function (data, conf) {
    const button = document.createElement('button')
    button.id = 'create'
    button.dataParam = data
    button.textContent = 'Create note'
    button.addEventListener('click', drawCreateForm.bind(null, data, conf))

    return button
}

export { createButton }