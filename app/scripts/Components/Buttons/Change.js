import { updateNote } from '../../Service/Update.js'

const changeButton = function (node, data, config) {
    const nodeButton = document.createElement('input')
    nodeButton.id = 'result'
    nodeButton.type = 'button'
    nodeButton.value = 'Update'
    nodeButton.className = "btn btn-primary"
    nodeButton.addEventListener('click', updateNote.bind(null, node, data, config))
    return nodeButton
}

export default changeButton