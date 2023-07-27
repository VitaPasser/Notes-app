import { EnumFrames } from "../../Enums/EnumFrames.js"

const addButtonsActive = function (app, data, config, button) {
    data.notes.map(function (element) {
        if (!element.archived)
            button(app, data, element.id, config)
    })
}

const addButtonsArchive = function (app, data, config, button) {
    data.notes.map(function (element) {
        if (element.archived)
            button(app, data, element.id, config)
    })
}

const addButtons = function (app, data, config, button) {
    if (config.display == EnumFrames.Archives)
        addButtonsArchive(app, data, config, button)
    else addButtonsActive(app, data, config, button)
}

export { addButtons }