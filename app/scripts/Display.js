import {data, getCategoryById} from './Data.js'

const Display = function (data) {
    const app = document.querySelector('div[id$="app"]')
    app.append(nodeNotes(data))
}

const nodeNotes = function ({notes, categories}) {
    const node = document.createElement('table')

    node.id = 'notes'

    notes.map(function(element){
        const category = getCategoryById(element.category_id, categories)
        node.append(nodeNote(element, category))
    })

    return node
}

const nodeNote = function (note, category) {
    const node = document.createElement('tr')

    node.id = note.id

    node.innerHTML += `<th>${note.created_at}</th>\n`
    node.innerHTML += `<th>${note.content}</th>\n`
    node.innerHTML += `<th>${category.name}</th>\n`
    
    if (note.date !== null) {
        node.innerHTML += `<th>${note.date}</th>\n`
    }

    console.log(node)
    return node;
}

Display(data)