import { getCategoryById } from '../Data.js'

const nodeNotes = function ({ notes, categories }, isArchived=false) {
    const node = document.createElement('table')

    node.id = 'notes'
    node.className = 'table'

    node.append(nodeTableHeader())
    
    const tbody = document.createElement('tbody')
    notes.map(function (element) {
        const category = getCategoryById(element.category_id, categories)
        
        if ( element.archived == isArchived ){
            tbody.append(nodeNote(element, category))
        }
    })

    node.append(tbody)

    return node
}

const nodeNote = function (note, category) {
    const node = document.createElement('tr')

    node.id = note.id

    node.innerHTML += `<td>${note.created_at}</td>\n`
    node.innerHTML += `<td>${category.name}</td>\n`
    node.innerHTML += `<td>${note.content}</td>\n`
    node.innerHTML += `<td>${note.date.join(', ')}</td>\n`
    
    return node;
}

const nodeTableHeader = function () {
    const node = document.createElement('thead')
    const tr = document.createElement('tr')

    tr.innerHTML += `<th scope='col'>Created at</th>\n`
    tr.innerHTML += `<th scope='col'>Category</th>\n`
    tr.innerHTML += `<th scope='col'>Content</th>\n`
    tr.innerHTML += `<th scope='col'>Dates</th>\n`
    tr.innerHTML += `<th scope='col'></th>\n`
    tr.innerHTML += `<th scope='col'></th>\n`
    tr.innerHTML += `<th scope='col'></th>\n`

    node.append(tr)

    return node;

}

export { nodeNotes, nodeTableHeader, nodeNote }