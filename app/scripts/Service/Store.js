import { Display } from '../Display.js'
import { EnumFrames } from '../Enums/EnumFrames.js';

const storeNote = function(nodeForm, data, conf, e) {
    e.preventDefault();

    const created_at =  new Date().toLocaleDateString('en-GB');

    const category_id = parseInt(nodeForm.querySelector(`select[id$='category']`).value)
    let content = nodeForm.querySelector(`input[id$='content']`).value
    const date = content.match(/(\d{2}\/\d{2}\/\d{4})/g); 
    content = content.replace(/(\d{2}\/\d{2}\/\d{4})/g, '')

    data.notes.push({
        "id": conf.next_create_id++,
        "created_at": created_at,
        "content": content,
        "category_id": category_id,
        "date": date == null ? [] : [...date],
        "archived": false
    })

    conf.display = EnumFrames.Index
    Display(data, conf)
}

export { storeNote }