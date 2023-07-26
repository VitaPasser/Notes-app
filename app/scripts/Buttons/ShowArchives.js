import { createNote } from "../Service/ShowArchives.js"
import { EnumFrames } from '../Frames/EnumFrames.js'

const archiveButton = function(data, conf) {
    const button = document.createElement('button')
    button.id = 'archive'
    button.textContent = EnumFrames.Index == conf.display ? 'Archives' : 'Active'
    button.addEventListener('click', createNote.bind(null, data, conf))

    return button
}

export { archiveButton }