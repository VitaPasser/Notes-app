import { createButton } from './Buttons/Create.js'
import { addDeleteButtons } from './Buttons/Delete.js'
import { addChangeButtons } from './Buttons/Update.js'
import { nodeCategories } from './Counter.js'
import { addArchiveButtons } from './Buttons/Archive.js'
import { archiveButton } from './Buttons/ShowArchives.js'

const tableFrame = function (app, data, conf, table) {
    app.append(archiveButton(data, conf))
    app.append(table(data))
    app.append(createButton(data, conf))
    addChangeButtons(app, data, conf)
    addArchiveButtons(app, data, conf)
    addDeleteButtons(app, data, conf)
    app.append(nodeCategories(data))
}

export { tableFrame }