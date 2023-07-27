import { addDeleteButtons } from './Buttons/Delete.js'
import { addChangeButtons } from './Buttons/Update.js'
import { nodeCategories } from './Counter.js'
import { addArchiveButtons } from './Buttons/Archive.js'
import tableButtons from './Buttons/Group/ArchiveCreate.js'

const tableFrame = function (app, data, config, table) {
    app.append(tableButtons(data, config))
    app.append(table(data))
    addChangeButtons(app, data, config)
    addArchiveButtons(app, data, config)
    addDeleteButtons(app, data, config)
    app.append(nodeCategories(data))
}

export { tableFrame }