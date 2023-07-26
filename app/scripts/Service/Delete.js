import { idToRealId } from '../Utils.js'
import { Display } from '../Display.js'

const deleteNote = function(data, id, conf) {
    data.notes.splice(idToRealId(data, id), 1)
    Display(data, conf)
}

export { deleteNote }