// Check for existing tasks in local storage
        const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];

        const todoList = document.getElementById('todo-list');
        const addTodoInput = document.getElementById('add-todo');

        function renderTasks() {
            // Clear existing tasks
            todoList.innerHTML = '';

            // Render tasks from local storage
            existingTasks.forEach((task, index) => {
                const listItem = document.createElement('li');
                listItem.className = `todo-item ${task.completed ? 'completed' : ''}`;
                listItem.innerHTML = `
                    <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${index})">
                    <span>${task.text}</span>
                    <button onclick="deleteTask(${index})">Delete</button>
                `;
                todoList.appendChild(listItem);
            });
        }

        function addTask() {
            const taskText = addTodoInput.value.trim();

            if (taskText !== '') {
                const newTask = { text: taskText, completed: false };
                existingTasks.push(newTask);
                localStorage.setItem('tasks', JSON.stringify(existingTasks));
                addTodoInput.value = '';
                renderTasks();
            }
        }

        function deleteTask(index) {
            existingTasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(existingTasks));
            renderTasks();
        }

        function toggleTask(index) {
            existingTasks[index].completed = !existingTasks[index].completed;
            localStorage.setItem('tasks', JSON.stringify(existingTasks));
            renderTasks();
        }

        // Initial render
        renderTasks();

        // Event listeners
        document.getElementById('add-todo').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                addTask();
            }
        });