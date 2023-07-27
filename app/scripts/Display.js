import { nodeNotes } from './Components/Table.js'
import { nodeArchivedNotes } from './Components/TableArchives.js'
import { EnumFrames } from './Enums/EnumFrames.js'
import { nodeCreateNote } from './Components/FormCreate.js'
import { nodeUpdateNote } from './Components/FormUpdate.js'
import { tableFrame } from './Components/TableFrame.js'
import RouteInThisFrameIsNotFound from './Exceptions/RouteInThisFrameIsNotFound.js'

const Display = function (data, config) {
    const app = document.createElement('div')
    app.id = 'app'

    switch (config.display) {
        case EnumFrames.Index:
            tableFrame(app, data, config, nodeNotes)
            break;

        case EnumFrames.Archives:
            tableFrame(app, data, config, nodeArchivedNotes)
            break;

        case EnumFrames.Create:
            app.append(nodeCreateNote(data, config))
            break;

        case EnumFrames.Edit:
            app.append(nodeUpdateNote(data, config))
            break;

        default:
            throw RouteInThisFrameIsNotFound(config.display)
            break;
    }

    const app_changing = document.querySelector('div[id$="app"]')
    app_changing.replaceWith(app)
}

export { Display }