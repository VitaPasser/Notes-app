import { idToRealId } from '../Utils.js'
import { Display } from '../Display.js'

const changeNote = function(data, id, conf, evt) {
    data.notes[idToRealId(data, id)] = {
        "id": id,
        "created_at": "05/03/2023",
        "content": "Test.",
        "category_id": 0,
        "date": [],
        "archived": false
    }
    Display(data, conf)
}

export { changeNote }