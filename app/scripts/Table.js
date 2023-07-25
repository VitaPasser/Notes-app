import { getCategoryById } from './Data.js'

const nodeNotes = function ({ notes, categories }) {
    const node = document.createElement('table')

    node.id = 'notes'

    node.append(nodeTableHeader())
    notes.map(function (element) {
        const category = getCategoryById(element.category_id, categories)
        node.append(nodeNote(element, category))
    })

    return node
}

const nodeNote = function (note, category) {
    const node = document.createElement('tr')

    node.id = note.id

    node.innerHTML += `<td>${note.created_at}</td>\n`
    node.innerHTML += `<td>${category.name}</td>\n`
    node.innerHTML += `<td>${note.content}</td>\n`
    node.innerHTML += `<td>${note.date.join(', ')}</td>\n`
    node.innerHTML += `<i class="bi bi-archive" id="archive-${note.id}"></i>\n`

    return node;
}

const nodeTableHeader = function () {
    const node = document.createElement('tr')

    node.innerHTML += `<th>Created at</th>\n`
    node.innerHTML += `<th>Category</th>\n`
    node.innerHTML += `<th>Content</th>\n`
    node.innerHTML += `<th>Dates</th>\n`

    return node;

}

export { nodeNotes }