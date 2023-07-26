import { updateNote } from "../Service/Update.js" 
import { idToRealId } from "../Utils.js"

const nodeUpdateNote = function (data, conf) {
    const node = document.createElement('form')
    node.id = 'update'

    const id = idToRealId(data, conf.id)
    node.innerHTML += `<input type="text" id="content" value="${data.notes[id].content + data.notes[id].date.join(', ')}">\n`

    const nodeSelect = document.createElement('select')
    nodeSelect.id = "category"
    data.categories.forEach(category => {
        nodeSelect.innerHTML += `<option ${data.notes[id].category_id == category.id ? "selected" : ""} value="${category.id}">${category.name}</option>\n`
    });

    node.append(nodeSelect)

    const nodeButton = document.createElement('input')
    nodeButton.id = 'result'
    nodeButton.type = 'button'
    nodeButton.value = 'Update'
    nodeButton.addEventListener('click', updateNote.bind(null, node, data, conf, id))

    node.append(nodeButton)

    return node
}

export { nodeUpdateNote }