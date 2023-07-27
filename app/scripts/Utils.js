const idToRealId = function(data, id) {
    return data.notes.findIndex((element) => element.id == id)
}

export { idToRealId }