import { nodeNotes } from './Table.js'
import { createButton } from './Create.js'
import { addDeleteButtons } from './Delete.js'
import { addChangeButtons } from './Change.js'
import { nodeCategories } from './Counter.js'
import { addArchiveButtons } from './Archive.js'
import { nodeArchivedNotes } from './ViewArchives.js'
import { archiveButton } from './ShowArchives.js'
import { EnumWindows } from './EnumWindow.js'

const Display = function (data, conf) {
    const app = document.createElement('div')
    app.id = 'app'

    initDisplayTable(app, data, conf)

    const app_changing = document.querySelector('div[id$="app"]')
    app_changing.replaceWith(app)
}

const initDisplayTable = function (app, data, conf) {
    const table = noteActualOrArchived(conf)

    app.append(archiveButton(data, conf))
    app.append(table(data))
    app.append(createButton(data, conf))
    addChangeButtons(app, data, conf)
    addArchiveButtons(app, data, conf)
    addDeleteButtons(app, data, conf)
    app.append(nodeCategories(data))
}

const noteActualOrArchived = function (conf) {
    if( conf.display == EnumWindows.Archives ) {
        return nodeArchivedNotes
    }
    return nodeNotes
}

export { Display }