import { idToRealId } from '../Utils.js'
import { Display } from '../Display.js'

const archiveNote = function(data, id, config) {
    const note = data.notes[idToRealId(data, id)]
    note.archived = !note.archived
    Display(data, config)
}

export { archiveNote }