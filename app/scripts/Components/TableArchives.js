import { nodeNotes } from './Table.js'

const nodeArchivedNotes = function ({ notes, categories }) {
    return nodeNotes({ notes, categories }, true)
}

export { nodeArchivedNotes }