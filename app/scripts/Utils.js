const idToRealId = function(data, id) {
    console.log(data)
    return data.notes.findIndex((element) => element.id == id)
}

const addButtons = function(app, data, button) {
    data.notes.map(function (element) {
        button(app, data, element.id)
    })
}

export { idToRealId, addButtons }