const idToRealId = function(data, id) {
    return data.notes.findIndex((element) => element.id == id)
}

const isArchived = function (element) {
    return element.archived == true
}

export { idToRealId, isArchived }