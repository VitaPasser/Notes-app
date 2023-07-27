import { nodeNotes } from './Components/Table.js'
import { nodeArchivedNotes } from './Components/TableArchives.js'
import { EnumFrames } from './Enums/EnumFrames.js'
import { nodeCreateNote } from './Components/FormCreate.js'
import { nodeUpdateNote } from './Components/FormUpdate.js'
import { tableFrame } from './Components/TableFrame.js'

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

export { Display }