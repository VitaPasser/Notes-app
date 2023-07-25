import notes from '../data/notes.json' assert {type: 'json'}
import categories from '../data/categories.json' assert {type: 'json'}

const data = {notes, categories}

const getCategoryById = function (id) {
    return categories[id]
}

export {data, getCategoryById}