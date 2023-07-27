import toBack from "../../Service/ToBack.js" 

const backButton = function (data, config) {
    const button = document.createElement('button')
    button.id = 'back'
    button.textContent = 'Back'
    button.className = "btn btn-primary"
    button.addEventListener('click', toBack.bind(null, data, config))

    return button
}

export default backButton