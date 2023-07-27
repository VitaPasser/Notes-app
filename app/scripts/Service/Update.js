import { Display } from '../Display.js'
import { idToRealId, configureDisplay } from '../Utils.js'
import DateIsInvalid from '../Exceptions/DateIsInvalid.js';

const updateNote = function(nodeForm, data, config, event) {
    event.preventDefault();

    const id = idToRealId(data, config.id)
    const created_at = data.notes[id].created_at;

    const category_id = parseInt(nodeForm.querySelector(`select[id$='category']`).value)

    let content = nodeForm.querySelector(`input[id$='content']`).value
    const date = content.match(/(\d{2}\/\d{2}\/\d{4})/g); 
    content = content.replace(/(\d{2}\/\d{2}\/\d{4})/g, '')

    date.forEach(element => {
        if (isNaN(new Date(element))) {
            throw DateIsInvalid(element)
        }
    });

    data.notes[id] = {
        "id": id,
        "created_at": created_at,
        "content": content,
        "category_id": category_id,
        "date": date == null ? [] : [...date],
        "archived": data.notes[id].archived
    }

    config = configureDisplay(config, config.display_last)
    config.id = null
    Display(data, config)
}

export { updateNote }