let todoList = [
                // {
                //     item: 'Milk', 
                //     dueDate: '9/10/2023'
                // },
                // {
                //     item: 'Water', 
                //     dueDate: '9/10/2023'
                // }
            ]; // Globally add items on an array

displayItems();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item: todoItem, dueDate: todoDate});
    inputElement.value = '';
    dateElement.value = '';

    displayItems()
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    newHtml = '';

    // Itrating on the Array
    for(let i = 0; i < todoList.length; i++) {
        // let item = todoList[i].item;
        // let dueDate = todoList[i].dueDate;

        // We can do it using JS Destructuring
        let {item, dueDate} = todoList[i];
    newHtml += `
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class="btn-delete" onclick = "todoList.splice(${i}, 1); displayItems(); ">Delete</button>
    `;
    }
    containerElement.innerHTML = newHtml;
}