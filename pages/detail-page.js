//validation function
function doesNotPassAllValidations(name, message) {
    if (!name && !message){
        alert("Please don't send it empty")
        return true
    }
    if (!name) {
        alert('Oh, these muggles technologies! You have to fill your name!')
        return true
    }
    if (!message) {
        alert("And don't forget your message, it's faster than an owl!")
        return true
    }
    if (message.length > 280) {
        alert("Writing this much, best go to the Daily Prophet. We need no Rita Skeeter here!")
        return true
    }
    return false
}

//change the first letter to upperCase
function upperCase(name){

}

//add event handler
function submitComment () {

//so the page does not refresh
    event.preventDefault()

//gather data
    const inputField = document.getElementById('name')
    const name = inputField.value
    const textArea = document.getElementById('message')
    const message = textArea.value

// check if user input passes validations
    if(doesNotPassAllValidations(name, message)){
        return null
    }

//create the elements you need
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')

    h3.innerHTML = `${name} said:`
    p.innerHTML = message

//add a class to a new section
    comment.classList.add('comment')
    
    comment.appendChild(h3)
    comment.appendChild(p)

// display the elements on the page
    const commentSection = document.getElementById("comments");
    commentSection.appendChild(comment);


// reset form values
    inputField.value = null;
    textArea.value = null;
}