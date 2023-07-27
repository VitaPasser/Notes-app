import { nodeNote, nodeTableHeader } from './Table.js'
import { getCategoryById } from '../Data.js'

const nodeArchivedNotes = function ({ notes, categories }) {
    const node = document.createElement('table')

    node.id = 'notes'

    node.append(nodeTableHeader())
    notes.map(function (element) {
        const category = getCategoryById(element.category_id, categories)
        
        if ( element.archived ){
            node.append(nodeNote(element, category))
        }
    })

    return node
}

export { nodeArchivedNotes }