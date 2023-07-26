const addButtons = function(app, data, conf, button) {
    data.notes.map(function (element) {
        button(app, data, element.id, conf)
    })
}

export { addButtons }