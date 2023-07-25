import { Display } from './Display.js'

const createButton = function(data) {
    const button = document.createElement('button')
    button.id = 'create'
    button.dataParam = data
    button.addEventListener('click', createNote)

    return button
}

const createNote = function(evt) {
    const data = evt.target.dataParam
    data.notes.push({
        "id": data.notes.length,
        "created_at": "05/03/2023",
        "content": "Test.",
        "category_id": 0,
        "date": []
    })
    Display(data)
}

export {createButton}