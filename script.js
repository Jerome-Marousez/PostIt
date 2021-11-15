
// CSS
const css = document.createElement('style')
css.innerHTML = `
/*----- MAIN CONTAINER -----*/
#todoContainer {
    margin: 40px 0;
}

/*- Header -*/
#containerTitle {
    font-family: Calibri;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    background-color: hsl(35, 100%, 50%);
    border-radius: 5px 5px 0 0;
    color: white;
    padding:8px 8px 8px 8px;
    font-weight: bold;
    cursor: default;
    user-select: none;
    width: 90vw;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    font-size: 20px;
    line-height: 20px;
}

#counter {
    margin-left: auto;
    margin-right: 15px;
    font-size: 12px;
}

/*- | + | Button -*/
#add {
    background-color: hsl(35, 100%, 70%);
    height: 20px;
    width: 40px;
    border-radius: 5px;
    text-align: center;
    color: white;
    font-weight: bold;
    cursor: pointer;
    font-size: 22px;
    line-height: 18px;
}

#add:active {
     background-color: hsl(35, 100%, 50%);
 }


/*- Body -*/
#container {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 90vw;
    max-height: 540px;
    background-color: hsl(0, 0%, 30%);
    padding: 0 15px;
    user-select: none;
    overflow: auto;
    margin-left: auto;
    margin-right: auto;

}

@keyframes animateElement{
    0% {
        opacity:0;
        transform:  scaleY(0) translateY(-100%);
    }
    100% {
        opacity:1;
        transform:  scaleY(1) translateY(0%);
    }
}

#container::-webkit-scrollbar {
    width: 10px;
}
#container::-webkit-scrollbar-track {
    background: hsl(0, 0%, 30%);
}

#container::-webkit-scrollbar-thumb {
    background: hsl(0, 0%, 40%);
}

#container::-webkit-scrollbar-thumb:hover {
    background: hsl(0, 0%, 50%);
}


/*- Footer -*/
#footer {
    font-family: Calibri;
    background-color: hsl(35, 100%, 50%);
    border-radius: 0 0 5px 5px;
    color: hsl(35, 100%, 75%);
    padding: 8px 8px 8px 8px;
    min-height: 40px;
    font-weight: bold;
    font-size: 20px;
    line-height: 20px;
    user-select: none;
    width: 90vw;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}



/*---------------------------------------------------------*/
/*  */
:root {
    --postit-color: hsl(35, 100%, 75%);
}


/*----- POST IT -----*/
.postItContainer {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 250px;
    height: 250px;
    background-color : var(--postit-color);
    border-radius: 2px 2px 22px 2px;
    position: relative;
    box-shadow: 5px 5px 8px hsl(0, 0%, 15%);
    animation: translate-down 300ms ease-in;
    margin: 25px auto 25px 15px;
}

@keyframes translate-down {
    from {
        top:-15px;
        box-shadow: 15px 15px 8px hsl(0, 0%, 15%);
    }
    to {
        top: 0;
        box-shadow: 5px 5px 8px hsl(0, 0%, 15%);

    }
}

@keyframes translate-down {
    from {
        top:-15px;
        box-shadow: 15px 15px 8px hsl(0, 0%, 15%);
    }
    to {
        top: 0;
        box-shadow: 5px 5px 8px hsl(0, 0%, 15%);

    }
}


/*- Small decoration on the bottom right -*/
#paper {
    background-color: rgba(255,255,255,40%);
    width: 20px;
    height: 20px;
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 0 0 22px 0;
}


/*- Header -*/
.postItHeader {
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    height: 40px;
    background-color: rgba(0,0,0,5%);
    padding: 8px 8px;
}

/*- | X | button -*/
#delete {
    align-self: center;
    width: 18px;
    height: 18px;
    background-color: rgba(0,0,0,5%);
    border-radius: 5px;
    text-align: center;
    color: white;
    cursor: pointer;
    line-height: 18px;
}
#delete:active {
     background-color: rgba(0,0,0,0);
 }


/*- Text area -*/
textarea {
    font-family: cursive;
    box-sizing: border-box;
    width: 100%;
    height: 190px;
    background-color: rgba(0,0,0,0);
    border: none;
    padding: 8px 8px;
    color: white;
    font-size: 18px;
    resize: none;
}

textarea::placeholder {
    color: rgba(0,0,0,15%);
    opacity: 1;
}

textarea:focus {
    outline: none !important;
}

textarea::-moz-selection {
    color: rgba(0,0,0,30%);
}
textarea::selection {
    color: rgba(0,0,0,30%);;
}

textarea::-webkit-scrollbar {
    width: 5px;
}
textarea::-webkit-scrollbar-track {
    background: rgba(0,0,0,0);
}

textarea::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,40%);
}

textarea::-webkit-scrollbar-thumb:hover {
    background: rgba(255,255,255,40%);
}


/* COLOR PICKER */
.colors {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 12px;
    left: 12px;
}

.colorPicker {
    height: 15px;
    width: 15px;
    margin-right: 5px;
    border: 1px solid white;
    border-radius: 50%;
}
`
document.body.append(css)


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
    footer.innerHTML = 'Press&nbsp;the&nbsp;&nbsp;+&nbsp;&nbsp;button to&nbsp;create&nbsp;a&nbsp;new&nbsp;postponed&nbsp;task'


    // Push elements to HTML
    document.body.append(mainContainer)
    mainContainer.append(containerTitle)
    mainContainer.append(container)
    mainContainer.append(footer)


    // Post it counter
    const counter = document.createElement('div')
    counter.id = 'counter'
    const count = Object.keys(localStorage).length
    counter.innerHTML = `${count}/24`
    containerTitle.append(counter)
    window.setInterval(updateCounter, 100)

    // Header | + | button
    const buttonAdd = document.createElement('div')
    buttonAdd.id = 'add'
    buttonAdd.innerHTML = '+'
    containerTitle.append(buttonAdd)

    buttonAdd.addEventListener('click', function() {
        const count = Object.keys(localStorage).length
        if (count < 24) {
            addPostIt()
        }

    })


}


// UPDATE COUNTER
function updateCounter() {
    const counter = document.getElementById('counter')
    const count = Object.keys(localStorage).length
    if (count < 15) {
        counter.style.visibility = 'hidden'
    }
    else if (count <= 19) {
        counter.style.visibility = 'visible'
        counter.style.color = 'dimgrey'
    } else {
        counter.style.visibility = 'visible'
        counter.style.color = 'brown'
    }
    counter.innerHTML = `${count}/24`
}


// OBJECT post it
class PostIt {

    constructor(text, id, color) {
        this.id = id
        this.text = text
        this.color = color
        this.createContainer(text, id)
        this.changeColor(id, color)
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

        // Color picker
        postItHeader.addEventListener('click', () => {
            this.selectColor(id)

        })

        // | X | button
        const deleteButton = document.createElement('div')
        deleteButton.id = 'delete'
        deleteButton.innerHTML = '✖'
        postItHeader.append(deleteButton)

        deleteButton.addEventListener('click', e => {
            e.stopPropagation()
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
        localStorage.setItem(obj.id, [obj.text+"µ"+obj.color])

    }

    // Delete a post it
    deletePostIt = (id) => {

        localStorage.removeItem(id)

        // remove post it from HTML
        let item = document.getElementById(id)
        item.parentNode.removeChild(item)

        // remove alert message 'too many post it'
        let array = Object.keys(localStorage)


    }

    selectColor = (id) => {
        const colors = [
            'hsl(35, 100%, 75%)',
            'hsl(90, 100%, 75%)',
            'hsl(180, 100%, 75%)',
            'hsl(225, 100%, 75%)',
            'hsl(270, 100%, 75%)',
            'hsl(315, 100%, 75%)',
            'hsl(360, 100%, 75%)'
        ]
        const target = document.getElementById(id)
        const colorContainer = document.createElement('div')
        colorContainer.classList.add('colors')
        colorContainer.id = `colorContainer${id}`
        target.appendChild(colorContainer)

        for(let i = 0; i < colors.length; i++) {
            const colorPicker = document.createElement('div')
            colorPicker.classList.add('colorPicker')
            colorPicker.style.backgroundColor = colors[i]
            colorContainer.append(colorPicker)

            colorPicker.addEventListener('click', () => {
                this.changeColor(id, colors[i])
                colorContainer.parentNode.removeChild(colorContainer)

            })

        }

    }

    // Change color of the post it
    changeColor = (id, color) => {

        const target = document.getElementById(id)
        target.style.setProperty('--postit-color', color);
        this.color = color

        this.save(this)
    }

}


// Create new post it (from scratch and database)
function addPostIt(text="", id=undefined, color) {
    let array = []
    let uniqueID = id

    // Generates a new unique ID when creating a new post it
    if (uniqueID === undefined) {
        Object.keys(localStorage).forEach(function(key) {
            array.push(key)
        })
        array.sort(function(a,b){return a- b})
        const number = array.splice(-1)
        uniqueID = parseInt(number[0])
        if (isNaN(uniqueID)) {
            uniqueID = 0
        } else {
            uniqueID++
        }

    }

    // Choose a color at random when creating a new post it
    if (color === undefined) {
        const colors = [
            'hsl(35, 100%, 75%)',
            'hsl(90, 100%, 75%)',
            'hsl(180, 100%, 75%)',
            'hsl(225, 100%, 75%)',
            'hsl(270, 100%, 75%)',
            'hsl(315, 100%, 75%)',
            'hsl(360, 100%, 75%)'
        ]
        color = colors[Math.floor(Math.random() * 6)]
    }

    // Generating post it
    const todo = new PostIt(text, uniqueID, color)
    todo.save(todo)

}


// Get post it from database (boot/refresh sequence)
function init () {

    for (const [key, value] of Object.entries(localStorage)) {
        const valuesCombined = value.split('µ')
        addPostIt(valuesCombined[0], key, valuesCombined[1])
    }

}

createContainer()
init()

