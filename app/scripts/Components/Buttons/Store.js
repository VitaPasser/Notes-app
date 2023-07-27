import { storeNote } from '../../Service/Store.js'

const changeButton = function (node, data, config) {
    const nodeButton = document.createElement('input')
    nodeButton.id = 'result'
    nodeButton.type = 'button'
    nodeButton.value = 'Create'
    nodeButton.className = "btn btn-primary btn-lg"
    nodeButton.addEventListener('click', storeNote.bind(null, node, data, config))
    return nodeButton
}

export default changeButton