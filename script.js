

// INIT & GLOBAL VARIABLES----------------------------------------
// /!\ Respect order of instantiation /!\

// localStorage.setItem(0, "0")
// localStorage.setItem(1, "0")


createContainer()
init()


function init (){
    for (const [key, value] of Object.entries(localStorage)) {
        generatePostIt(value, key)
    }
}


function createContainer () {

    const todoContainer = document.createElement('div')
    todoContainer.id = "todoContainer"
    const containerTitle = document.createElement('div')
    containerTitle.id = 'containerTitle'
    containerTitle.innerHTML = 'Postponed Task Manager'

    const container = document.createElement('div')
    container.id = 'container'

    const footer = document.createElement('div')
    footer.id = 'footer'

    document.body.appendChild(todoContainer)
    todoContainer.append(containerTitle)
    todoContainer.append(container)
    todoContainer.append(footer)


    const buttonAdd = document.createElement('div')
    buttonAdd.id = 'add'
    buttonAdd.innerHTML = '+'
    containerTitle.append(buttonAdd)

    buttonAdd.addEventListener('click', function(){
        generatePostIt()
    })

    const scrollText = document.createElement('pre')
    scrollText.id = 'scroll-text'
    scrollText.innerHTML = `Press the + button to generate a new TODO and postpone yet another task           Your changes are saved locally and will be there when you will come back`
    footer.append(scrollText)

}


// Post it constructor
function PostIt(text, id) {
    this.id = id
    this.text = text

    // post-it outlines
    const postIt = document.createElement('div')
    postIt.classList.add('postItContainer')
    postIt.id = id
    const container = document.getElementById('container')
    container.append(postIt)
    const paper = document.createElement('div')
    paper.id = "paper"
    postIt.append(paper)

    // post-it header
    const postItHeader = document.createElement('div')
    postItHeader.classList.add('postItHeader')
    postIt.append(postItHeader)

    // post-it content

    const deleteButton = document.createElement('div')
    deleteButton.id = 'delete'
    deleteButton.innerHTML = '✖'
    postItHeader.append(deleteButton)

    deleteButton.addEventListener('click', function(){
        deletePostIt(id)
    })

    let inputText = document.createElement('textarea')
    inputText.placeholder = 'To do...'
    inputText.spellcheck = 'false'
    postIt.append(inputText)

    if(text !== "") {
        inputText.value = text
    }

    inputText.onkeyup = function () {
        updateTodo(inputText.value, id)
    }

}


function generatePostIt(text="", id=undefined){
    let array = []
    let uniqueID = id

    if (uniqueID === undefined) {
        Object.keys(localStorage).forEach(function(key){
            array.push(key)
        })
        array.sort()
        const number = array.splice(-1)
        uniqueID = parseInt(number[0])
        uniqueID++
        if (isNaN(uniqueID)) {
            uniqueID = 0
        }

    }


    const todo = new PostIt(text, uniqueID)
    updateData(todo)

}
// localStorage.clear()


function updateTodo(text, id) {
    localStorage.setItem(id, text)

}

function updateData(obj){
    localStorage.setItem(obj.id, obj.text)

}

function deletePostIt(id) {
    localStorage.removeItem(id)
    let el = document.getElementById(id);
    el.parentNode.removeChild( el )
}
