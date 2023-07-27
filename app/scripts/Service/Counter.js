const countEqualsCategory = function(category, notes) {
    const count = {
        active: 0,
        archived: 0
    }

    notes.forEach(note => {
        if(category.id == note.category_id) {
            if(note.archived) {
                count.archived++
            } else {
                count.active++
            }
        }
    })

    return count
}

export default countEqualsCategory