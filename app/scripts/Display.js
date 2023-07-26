import { nodeNotes } from './Frames/Table.js'
import { createButton } from './Buttons/Create.js'
import { addDeleteButtons } from './Buttons/Delete.js'
import { addChangeButtons } from './Buttons/Update.js'
import { nodeCategories } from './Frames/Counter.js'
import { addArchiveButtons } from './Buttons/Archive.js'
import { nodeArchivedNotes } from './Frames/TableArchives.js'
import { archiveButton } from './Buttons/ShowArchives.js'
import { EnumFrames } from './Frames/EnumFrames.js'
import { nodeCreateNote } from './Frames/FormCreate.js'
import { nodeUpdateNote } from './Frames/FormUpdate.js'

const Display = function (data, conf) {
    const app = document.createElement('div')
    app.id = 'app'

    switch (conf.display) {
        case EnumFrames.Index:
            tableFrame(app, data, conf, nodeNotes)
            break;

        case EnumFrames.Archives:
            tableFrame(app, data, conf, nodeArchivedNotes)
            break;

        case EnumFrames.Create:
            app.append(nodeCreateNote(data, conf))
            break;

        case EnumFrames.Edit:
            app.append(nodeUpdateNote(data, conf))
            break;
    
        default:
            tableFrame(app, data, conf)
            break;
    }

    const app_changing = document.querySelector('div[id$="app"]')
    app_changing.replaceWith(app)
}

const tableFrame = function (app, data, conf, table) {
    app.append(archiveButton(data, conf))
    app.append(table(data))
    app.append(createButton(data, conf))
    addChangeButtons(app, data, conf)
    addArchiveButtons(app, data, conf)
    addDeleteButtons(app, data, conf)
    app.append(nodeCategories(data))
}

export { Display }