import { idToRealId } from "../Utils.js"
import backChangeButtons from "./Buttons/Group/BackUpdate.js"

const nodeUpdateNote = function (data, config) {
    const node = document.createElement('form')
    node.id = 'update'
    node.className = "d-flex flex-column mb-3"
    
    const id = idToRealId(data, config.id)
    
    node.innerHTML += `<h2 class="p-2">Write and update your note</h2>\n`
    node.innerHTML += `<textarea class="p-2" type="text" id="content">${data.notes[id].content + data.notes[id].date.join(', ')}</textarea>\n`
    
    const nodeSelect = document.createElement('select')
    nodeSelect.id = "category"
    nodeSelect.className = "mt-3"
    data.categories.forEach(category => {
        nodeSelect.innerHTML += `<option ${data.notes[id].category_id == category.id ? "selected" : ""} value="${category.id}">${category.name}</option>\n`
    });
    
    node.append(nodeSelect)
    node.append(backChangeButtons(node, data, config))

    return node
}

export { nodeUpdateNote }