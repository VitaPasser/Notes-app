import backButton from "../Back.js"
import storeButton from "../Store.js"

const backStoreButtons = function (node, data, config) {
    const group = document.createElement('div')

    group.className = 'btn-group mt-3 '
    group.role="group"
    
    group.append(backButton(data, config))
    group.append(storeButton(node, data, config))

    return group
}

export default backStoreButtons