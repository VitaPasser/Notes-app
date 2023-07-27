import { archiveButton } from "../ShowArchives.js"
import { createButton } from "../Create.js"

const tableButtons = function (data, config) {
    const group = document.createElement('div')

    group.className = 'btn-group mb-2 mt-3'
    group.role="group"
    
    group.append(archiveButton(data, config))
    group.append(createButton(data, config))

    return group
}

export default tableButtons