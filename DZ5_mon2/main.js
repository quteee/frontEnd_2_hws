const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')
const butOne = document.createElement('button')
const butTwo = document.createElement('button')
const createTodo = () => {
    if (!input.value.trim()) {
       input.value = ''
        return false
    } else {

        const div = document.createElement('div')
        const text = document.createElement('h3')

        butOne.setAttribute('class', 'butOne')
        butTwo.setAttribute('class', 'butTwo')
        div.setAttribute("class", "block_text")
        butOne.innerHTML = 'delete'
        butTwo.innerHTML = 'edit'
        text.innerHTML = input.value

        div.append(text)
        div.append(butOne)
        div.append(butTwo)
        todoList.prepend(div)
        input.value = ''
    }
    return input.value = ''
}
butOne.onclick = () =>  {
    todoList.remove()
    return createTodo()
}

butTwo.onclick = () => {
   const prmT = prompt()
    text.innerHTML = prmT
    // Не понял как вывести
}

createButton.onclick = () => createTodo()

window.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) createTodo()
})











