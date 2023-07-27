import { createButton } from './Buttons/Create.js'
import { addDeleteButtons } from './Buttons/Delete.js'
import { addChangeButtons } from './Buttons/Update.js'
import { nodeCategories } from './Counter.js'
import { addArchiveButtons } from './Buttons/Archive.js'
import { archiveButton } from './Buttons/ShowArchives.js'

const tableFrame = function (app, data, config, table) {
    app.append(archiveButton(data, config))
    app.append(table(data))
    app.append(createButton(data, config))
    addChangeButtons(app, data, config)
    addArchiveButtons(app, data, config)
    addDeleteButtons(app, data, config)
    app.append(nodeCategories(data))
}

export { tableFrame }