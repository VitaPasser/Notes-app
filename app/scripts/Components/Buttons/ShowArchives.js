import { createNote } from "../../Service/ShowArchives.js"
import { EnumFrames } from '../../Enums/EnumFrames.js'

const archiveButton = function(data, config) {
    const button = document.createElement('button')
    button.id = 'archive'
    button.textContent = EnumFrames.Index == config.display ? 'Archives' : 'Active'
    button.addEventListener('click', createNote.bind(null, data, config))

    return button
}

export { archiveButton }