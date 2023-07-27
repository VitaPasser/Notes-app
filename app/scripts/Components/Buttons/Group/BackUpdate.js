import backButton from "../Back.js"
import changeButton from "../Change.js"

const backChangeButtons = function (node, data, config) {
    const group = document.createElement('div')

    group.className = 'btn-group mt-3 '
    group.role="group"
    
    group.append(backButton(data, config))
    group.append(changeButton(node, data, config))

    return group
}

export default backChangeButtons