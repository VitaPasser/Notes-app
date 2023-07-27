import { storeNote } from "../Service/Store.js" 

const nodeCreateNote = function (data, conf) {
    const node = document.createElement('form')
    node.id = 'create'
    
    node.innerHTML += `<input type="text" id="content">\n`
    
    const nodeSelect = document.createElement('select')
    nodeSelect.id = "category"
    data.categories.forEach(category => {
        nodeSelect.innerHTML += `<option value="${category.id}">${category.name}</option>\n`
    });
    
    node.append(nodeSelect)
    
    const nodeButton = document.createElement('input')
    nodeButton.id = 'result'
    nodeButton.type = 'button'
    nodeButton.value = 'Create'
    nodeButton.addEventListener('click', storeNote.bind(null, node, data, conf))
    
    node.append(nodeButton)
    node.onsubmit = storeNote.bind(null, node, data, conf)

    return node
}

const onKeyDown = function (e) {
    if(e.keyCode == 13) {
        storeNote(node, data, conf)
    }
}

export { nodeCreateNote }