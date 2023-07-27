import countEqualsCategory from "../Service/Counter.js"

const nodeCategories = function ({ notes, categories }) {
    const node = document.createElement('table')

    node.id = 'categoriesCount'
    node.className = 'table'

    node.append(nodeTableHeader())

    const tbody = document.createElement('tbody')
    categories.map(function (category) {
        const count = countEqualsCategory(category, notes)
        tbody.append(nodeCategory(category, count))
    })

    node.append(tbody)

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
    const node = document.createElement('thead')
    const tr = document.createElement('tr')

    tr.innerHTML += `<th scope='col'>Category</th>\n`
    tr.innerHTML += `<th scope='col'>Active</th>\n`
    tr.innerHTML += `<th scope='col'>Archived</th>\n`

    node.append(tr)

    return node
}

export { nodeCategories }