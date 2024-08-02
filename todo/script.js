const addTaskForm = document.getElementById('add-task-form');
const addTaskButton = document.getElementById('add-task-button');
const todoList = document.getElementById('todo-list');
const editTaskButton = document.getElementById('edit-task-button');
const descriptionInput = document.getElementById('task');

let taskID = null;
let tasks = getAllTasks();
displayTasks(tasks);

addTaskForm.addEventListener('submit', addButtonClickHandler);
editTaskButton.addEventListener('click', handleEditButtonClick);

function addButtonClickHandler(event) {
    event.preventDefault();
    const description = descriptionInput.value.trim();
    if (description === '') return;
    addTask(description);
    descriptionInput.value = '';
}


function addTask(description) {
    tasks = getAllTasks(); 
    const task = { description };
    tasks.push(task);
    saveTasks(tasks);
    console.log(tasks.length);
    if (tasks.length === 1)  todoList.innerHTML = '';
    renderTask(task, tasks.length - 1);
  
}

function getAllTasks() {
    try {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        return tasks || [];
      } catch (error) {
        console.error('Error fetching tasks:', error);
        return [];
      }
}

function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createTaskHTML(task, index) {
    return `
        <div class="item">
            <span id="${index}" class="task-description">${task.description}</span>
            <div>
                <button onclick="editTask(${index})" class="edit-button">
                    <!-- SVG for Edit Button -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil">
                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>
                        <path d="m15 5 4 4"/>
                    </svg>
                </button>
                <button onclick="deleteTask(${index})" class="delete-button">
                    <!-- SVG for Delete Button -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2">
                        <path d="M3 6h18"/>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                        <line x1="10" x2="10" y1="11" y2="17"/>
                        <line x1="14" x2="14" y1="11" y2="17"/>
                    </svg>
                </button>
            </div>
        </div>`;
}



function displayTasks(tasks) {
    if (tasks.length === 0) {
        todoList.innerHTML = '<h3 style="text-align: center; color: #06b6d4; margin-top: 50px;">No tasks added yet.</h3>';
        return;
    }
    todoList.innerHTML = tasks.map(createTaskHTML).join('');
}

function renderTask(task, index) {
    const listItemContainer = document.createElement('div');
    listItemContainer.innerHTML = createTaskHTML(task, index);
    todoList.appendChild(listItemContainer);
}



function updateTaskList() {
    tasks = getAllTasks();
    displayTasks(tasks);
}

function deleteTask(id) {
    tasks = getAllTasks();
    tasks.splice(id, 1);
    saveTasks(tasks);
    updateTaskList();
}

function editTask(id) {
    editTaskButton.style.display = 'block';
    addTaskButton.style.display = 'none';
    descriptionInput.value = document.getElementById(id).textContent.trim();
    taskID = id;
}

function updateTask(taskID, newDescription) {
    if (newDescription === '') {
        alert("Invalid task description");
        return;
    }
    tasks = getAllTasks();
    tasks[taskID].description = newDescription;
    saveTasks(tasks);
    updateTaskList();
    descriptionInput.value = '';
}

function handleEditButtonClick() {
    const newDescription = descriptionInput.value.trim();
    updateTask(taskID, newDescription);
    editTaskButton.style.display = 'none';
    addTaskButton.style.display = 'block';
}



