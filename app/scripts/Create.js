import { Display } from './Display.js'

const createButton = function(data, conf) {
    const button = document.createElement('button')
    button.id = 'create'
    button.dataParam = data
    button.textContent = 'Create note'
    button.addEventListener('click', createNote.bind(null, data, conf))

    return button
}

const createNote = function(data, conf) {
    data.notes.push({
        "id": data.notes.length,
        "created_at": "05/03/2023",
        "content": "Test.",
        "category_id": 0,
        "date": [],
        "archived": false
    })
    Display(data, conf)
}

export {createButton}