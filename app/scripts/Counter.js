const nodeCategories = function ({ notes, categories }) {
    const node = document.createElement('table')

    node.id = 'categoriesCount'

    node.append(nodeTableHeader())
    categories.map(function (category) {
        const count = countEqualsCategory(category, notes)
        node.append(nodeCategory(category, count))
    })

    return node
}

const nodeCategory = function (category, count) {
    const node = document.createElement('tr')

    node.id = category.id

    node.innerHTML += `<td>${category.name}</td>\n`
    node.innerHTML += `<td>${count.active}</td>\n`
    node.innerHTML += `<td>${count.archived}</td>\n`

    return node
}

const nodeTableHeader = function () {
    const node = document.createElement('tr')

    node.innerHTML += `<th>Category</th>\n`
    node.innerHTML += `<th>Active</th>\n`
    node.innerHTML += `<th>Archived</th>\n`

    return node
}

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

export { nodeCategories }