import { isArchived } from './Utils.js'
import { nodeNote, nodeTableHeader } from './Table.js'
import { getCategoryById } from './Data.js'

const nodeArchivedNotes = function ({ notes, categories }) {
    const node = document.createElement('table')

    node.id = 'notes'

    node.append(nodeTableHeader())
    console.log(notes)
    notes.map(function (element) {
        const category = getCategoryById(element.category_id, categories)
        
        if ( isArchived(element) ){
            node.append(nodeNote(element, category))
        }
    })

    return node
}

export { nodeArchivedNotes }