import { Display } from '../Display.js'
import { EnumFrames } from '../Enums/EnumFrames.js';
import { configureDisplay } from '../Utils.js';
import DateIsInvalid from '../Exceptions/DateIsInvalid.js';

const storeNote = function(nodeForm, data, config, event) {
    event.preventDefault();

    const created_at =  new Date().toLocaleDateString('en-GB');

    const category_id = parseInt(nodeForm.querySelector(`select[id$='category']`).value)
    let content = nodeForm.querySelector(`input[id$='content']`).value
    const date = content.match(/(\d{2}\/\d{2}\/\d{4})/g); 
    content = content.replace(/(\d{2}\/\d{2}\/\d{4})/g, '')

    date.forEach(element => {
        if (isNaN(new Date(element))) {
            throw DateIsInvalid(element)
        }
    });

    data.notes.push({
        "id": config.next_create_id++,
        "created_at": created_at,
        "content": content,
        "category_id": category_id,
        "date": date == null ? [] : [...date],
        "archived": false
    })

    config = configureDisplay(config, EnumFrames.Index)
    Display(data, config)
}

export { storeNote }