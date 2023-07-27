import { idToRealId } from '../Utils.js'
import { Display } from '../Display.js'

const deleteNote = function(data, id, config) {
    data.notes.splice(idToRealId(data, id), 1)
    Display(data, config)
}

export { deleteNote }