import backStoreButtons from "./Buttons/Group/BackStore.js"

const nodeCreateNote = function (data, config) {
    const node = document.createElement('form')
    node.id = 'create'
    node.className = "d-flex flex-column mb-3"
    
    node.innerHTML += `<h2 class="p-2"">Write and save your note</h2>\n`
    node.innerHTML += `<textarea class="p-2" id="content"></textarea>\n`
    
    const nodeSelect = document.createElement('select')
    nodeSelect.id = "category"
    nodeSelect.className = "mt-3"
    data.categories.forEach(category => {
        nodeSelect.innerHTML += `<option value="${category.id}">${category.name}</option>\n`
    });
    
    node.append(nodeSelect)
    node.append(backStoreButtons(node, data, config))

    return node
}

export { nodeCreateNote }