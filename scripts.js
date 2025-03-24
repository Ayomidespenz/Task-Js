const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');


addTaskButton.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
const dateInput = document.getElementById('dateInput').value;

    if (taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <span>${dateInput}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;
        li.addEventListener('click', toggleComplete);
        taskList.appendChild(li);
        taskInput.value = '';

    }
}

function removeTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}

function toggleComplete(event) {
    if(event.target.tagName !== 'BUTTON'){ 
      this.classList.toggle('completed');
    }
}
