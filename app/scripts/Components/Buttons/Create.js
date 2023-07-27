import { drawCreateForm } from "../../Service/CreateRedirect.js"

const createButton = function (data, config) {
    const button = document.createElement('button')
    button.id = 'create'
    button.dataParam = data
    button.textContent = 'Create note'
    button.addEventListener('click', drawCreateForm.bind(null, data, config))

    return button
}

export { createButton }