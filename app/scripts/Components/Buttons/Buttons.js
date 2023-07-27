import { EnumFrames } from "../../Enums/EnumFrames.js"

const addButtonsActive = function (app, data, conf, button) {
    data.notes.map(function (element) {
        if (!element.archived)
            button(app, data, element.id, conf)
    })
}

const addButtonsArchive = function (app, data, conf, button) {
    data.notes.map(function (element) {
        if (element.archived)
            button(app, data, element.id, conf)
    })
}

const addButtons = function (app, data, conf, button) {
    if (conf.display == EnumFrames.Archives)
        addButtonsArchive(app, data, conf, button)
    else addButtonsActive(app, data, conf, button)
}

export { addButtons }