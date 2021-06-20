let todo_list = []

const submit_button = document.querySelector('#submit_button')
const clear_button = document.querySelector('#clear_button')

let input_item = document.querySelector('#todo_item')

let todo_list_display = document.querySelector('#items')


submit_button.addEventListener('click', function(e) {
    e.preventDefault()
    todo_list.push(input_item.value)
    const index_of_new_item = todo_list.length - 1
    createItem(index_of_new_item)
    reset()
})

clear_button.addEventListener('click', function() {
    while(todo_list.length > 0) {
        todo_list.pop()
        todo_list_display.removeChild(todo_list_display.firstElementChild)
    }
})

for(let i = 0; i < todo_list.length; i++) {
    document.querySelector(`#delete${i}`).addEventListener('click',  function() {
        console.log(`You clicked item number ${i} in the list`)
    })
}

function createItem(index_of_new_item) {
    let new_item = document.createElement('li')
    let new_text = document.createElement('span')
    let completed_button = document.createElement('button')
    completed_button.setAttribute('id', `completed${index_of_new_item}`)
    completed_button.innerText = 'done'
    let delete_button = document.createElement('button')
    delete_button.setAttribute('id', `delete${index_of_new_item}`)
    delete_button.innerText = 'delete'
    new_text.textContent = input_item.value
    appendToListItem(new_item, completed_button, delete_button, new_text)
    todo_list_display.appendChild(new_item)
    completed_button.addEventListener('click', function() {
        delete_button.disabled = true
        completed_button.disabled = true
        new_text.classList.add('completed')
        reset()
    })
    delete_button.addEventListener('click', function() {
        todo_list.splice(index_of_new_item, 1)
        todo_list_display.removeChild(new_item)
        reset()
    })
}

function appendToListItem(new_item, completed_button, delete_button, new_text) {
    new_item.appendChild(completed_button)
    new_item.appendChild(delete_button)
    new_item.appendChild(new_text)
}

function reset() {
    input_item.value = ''
    input_item.focus()
}