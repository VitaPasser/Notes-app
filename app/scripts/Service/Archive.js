import { idToRealId } from '../Utils.js'
import { Display } from '../Display.js'

const archiveNote = function(data, id, conf, evt) {
    const note = data.notes[idToRealId(data, id)]
    note.archived = !note.archived
    Display(data, conf)
}

export { archiveNote }