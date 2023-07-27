import { Display } from '../Display.js'
import { EnumFrames } from '../Enums/EnumFrames.js';
import { idToRealId } from '../Utils.js'

const updateNote = function(nodeForm, data, conf, e) {
    e.preventDefault();

    const id = idToRealId(data, conf.id)
    const created_at = data.notes[id].created_at;

    const category_id = parseInt(nodeForm.querySelector(`select[id$='category']`).value)
    let content = nodeForm.querySelector(`input[id$='content']`).value
    const date = content.match(/(\d{2}\/\d{2}\/\d{4})/g); 
    content = content.replace(/(\d{2}\/\d{2}\/\d{4})/g, '')

    data.notes[id] = {
        "id": id,
        "created_at": created_at,
        "content": content,
        "category_id": category_id,
        "date": date == null ? [] : [...date],
        "archived": false
    }

    conf.display = EnumFrames.Index
    conf.id = null
    Display(data, conf)
}

export { updateNote }