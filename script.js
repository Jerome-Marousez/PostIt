
// Create frame of the app
function createContainer () {

    // Main container that contains everything
    const mainContainer = document.createElement('div')
    mainContainer.id = "todoContainer"

    // Header
    const containerTitle = document.createElement('div')
    containerTitle.id = 'containerTitle'
    containerTitle.innerHTML = 'Postponed Task Manager'

    // Body
    const container = document.createElement('div')
    container.id = 'container'

    // Footer
    const footer = document.createElement('div')
    footer.id = 'footer'

    // Push elements to HTML
    document.body.appendChild(mainContainer)
    mainContainer.append(containerTitle)
    mainContainer.append(container)
    mainContainer.append(footer)

    // Header | + | button
    const buttonAdd = document.createElement('div')
    buttonAdd.id = 'add'
    buttonAdd.innerHTML = '+'
    containerTitle.append(buttonAdd)

    buttonAdd.addEventListener('click', function(){
        addPostIt()
    })

    // Footer scroll text
    const scrollText = document.createElement('pre')
    scrollText.id = 'scroll-text'
    scrollText.innerHTML = `Press the + button to generate a new TODO and postpone yet another task           Your changes are saved locally and will be there when you will come back`
    footer.append(scrollText)

}


// OBJECT post it
class PostIt {

    constructor(text, id) {
        this.id = id
        this.text = text
        this.createContainer(text, id)
    }

    createContainer (text, id) {

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

        // | X | button
        const deleteButton = document.createElement('div')
        deleteButton.id = 'delete'
        deleteButton.innerHTML = '✖'
        postItHeader.append(deleteButton)

        deleteButton.addEventListener('click', () => {
            this.deletePostIt(id)
        })

        // Textarea
        let inputText = document.createElement('textarea')
        inputText.placeholder = 'To do...'
        inputText.spellcheck = 'false'
        postIt.append(inputText)

        if(text !== "") {
            inputText.value = text
        }

        inputText.onkeyup = () => {
            this.text = inputText.value
            this.save(this)
        }

    }

    // Create a new item in the database or update it
    save = (obj) => {
        localStorage.setItem(obj.id, obj.text)

    }

    // Delete a post it
    deletePostIt = (id) => {
        localStorage.removeItem(id)
        // remove post it from HTML
        let item = document.getElementById(id)
        item.parentNode.removeChild(item)
    }

}

// Create new post it (from scratch and database)
function addPostIt(text="", id=undefined) {
    let array = []
    let uniqueID = id

    // Generates a new unique ID when creating a new post it
    if (uniqueID === undefined) {
        Object.keys(localStorage).forEach(function(key) {
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

    // Generating post it
    const todo = new PostIt(text, uniqueID)
    todo.save(todo)

}


// Get post it from database (boot/refresh sequence)
function init () {
    for (const [key, value] of Object.entries(localStorage)) {
        addPostIt(value, key)
    }
}

createContainer()
init()

