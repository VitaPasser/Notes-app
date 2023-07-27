const idToRealId = function(data, id) {
    return data.notes.findIndex((element) => element.id == id)
}

const configureDisplay = function (config, enum_frame) {
    config.display_last = config.display
    config.display = enum_frame
    return config;
}


export { idToRealId, configureDisplay }