const addBtn = document.getElementById("add-btn");
const inputTask = document.getElementById("task-input");
const todoList = document.getElementById("todo-items-container");

addBtn.addEventListener('click', () => {
    const inputValue = inputTask.value;
    alert(`Adding New task ${inputValue}`);
    const li = document.createElement('li');


    const todoTask = document.createElement('span');
    todoTask.textContent = inputValue;
    inputTask.value=''


    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'X';
    removeBtn.classList.add('remove-btn');
    removeBtn.style.marginLeft='5px'
    removeBtn.addEventListener('click', () => {
        li.remove();
    });

    const removeAllBtn = document.getElementById("remove-all-btn");
    removeAllBtn.addEventListener('click', () => {
        todoList.innerHTML = '';
    })


    li.appendChild(todoTask);
    li.appendChild(removeBtn);

    todoList.appendChild(li);
})
