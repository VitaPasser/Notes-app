import { Display } from './Display.js'
import { EnumWindows } from './EnumWindow.js'

const archiveButton = function(data, conf) {
    const button = document.createElement('button')
    button.id = 'archive'
    button.textContent = EnumWindows.Index == conf.display ? 'Archives' : 'Active'
    button.addEventListener('click', createNote.bind(null, data, conf))

    return button
}

const createNote = function(data, conf) {
    
    conf.display = EnumWindows.Index == conf.display ? EnumWindows.Archives : EnumWindows.Index
    Display(data, conf)
}

export {archiveButton}