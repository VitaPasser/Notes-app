import { nodeNote, nodeNotes, nodeTableHeader } from './Table.js'

const Display = function (data) {
    const app = document.querySelector('div[id$="app"]')
    app.replaceWith(nodeNotes(data))
}

export { Display }