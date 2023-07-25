import { nodeNotes } from './Table.js'
import { createButton } from './Create.js'
import { addDeleteButtons } from './Delete.js'
import { addChangeButtons } from './Change.js'
import { nodeCategories } from './Counter.js'

const Display = function (data) {
    const app = document.createElement('div')
    app.id = 'app'
    app.append(nodeNotes(data))
    app.append(createButton(data))
    addChangeButtons(app, data)
    addDeleteButtons(app, data)
    app.append(nodeCategories(data))

    const app_changing = document.querySelector('div[id$="app"]')
    app_changing.replaceWith(app)
}

export { Display }