document.addEventListener('DOMContentLoaded', () => {
    const newTodoInput = document.getElementById('new-todo');
    const addTodoButton = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');
    const dingSound = document.getElementById('ding-sound');

    addTodoButton.addEventListener('click', addTodo);
    newTodoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    function addTodo() {
        const todoText = newTodoInput.value.trim();
        if (todoText !== '') {
            const todoItem = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            const todoLabel = document.createElement('span');
            todoLabel.textContent = todoText;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';

            todoItem.appendChild(checkbox);
            todoItem.appendChild(todoLabel);
            todoItem.appendChild(deleteButton);
            todoList.appendChild(todoItem);

            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    todoItem.classList.add('completed');
                    todoList.appendChild(todoItem);
                    dingSound.play();
                } else {
                    todoItem.classList.remove('completed');
                }
            });

            deleteButton.addEventListener('click', () => {
                todoItem.classList.add('removed');
                setTimeout(() => {
                    todoItem.remove();
                }, 500);
            });

            newTodoInput.value = '';
        }
    }
});
