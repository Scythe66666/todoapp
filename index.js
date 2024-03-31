console.log("js script was loaded ");
const add_button = document.querySelector(".add-task button");
add_button.addEventListener('click', handleClickadd_button);
task1 = Task('1', 'Task 1 in list');
var todo_list = ["make todo App"];
const toDoDiv = document.querySelector("#toDoList");
const toDoCounter = document.querySelector('.tasks-pending');
displayTask(todo_list);
const end_task_button = document.querySelector("#end_task");
end_task_button.addEventListener('click', handleEndTask);
var completed_list = [];
displayCompletedTasks(completed_list);





















//constructor for task object
function Task(id, description) {
    this.id = id;
    this.description = description;
}

function handleClickadd_button() {
    var textbox = this.parentElement.querySelector("input");
    var string = textbox.value;
    string = string.trim();
    if (string != '') {
        todo_list.push(string);
        var element = createToDoElement(todo_list.length, string);
        toDoDiv.appendChild(element);
    }
    textbox.value = null;
    toDoCounter.innerText = 'Tasks Pending ' + todo_list.length;
}


function displayTask(list) {
    var count = 1;
    toDoDiv.innerHTML = "";
    list.forEach(element => {
        var element = createToDoElement(
            count++, element
        );
        toDoDiv.appendChild(element);
        toDoCounter.innerText = todo_list.length;
        toDoCounter.innerText = 'Tasks Pending ' + todo_list.length;
    });
}

function createToDoElement(id, description) {
    var div_element = document.createElement('div');
    div_element.classList.add('todo-item');
    var input_elemnt = document.createElement('input');
    input_elemnt.setAttribute('type', 'checkbox');
    var text = document.createElement('span');
    text.innerText = id + ". " + description;
    div_element.appendChild(input_elemnt);
    div_element.appendChild(text);
    return div_element;
}

function handleEndTask() {
    var checkboxes = [];
    console.log("handle end task was called");
    checkboxes = document.querySelectorAll('input[type="checkbox"]');
    count = 0;
    checkboxes.forEach(Element => {
        if (Element.checked) {
            var string = todo_list[count];
            completed_list.push(todo_list[count]);
            todo_list.splice(count, 1);
            var element = createCompletedTaskElement(todo_list.length, string);
            toDoDiv.appendChild(element);
            count --;
        }
        count++;
    })
    displayCompletedTasks(completed_list);
    displayTask(todo_list);
    toDoCounter.innerText = 'Tasks Pending ' + todo_list.length;
}

function displayCompletedTasks(list) {
    var count = 0;
    const completed_div = document.querySelector('#completed-tasks');
    completed_div.innerHTML = "";
    list.forEach(element => {
        var element = createCompletedTaskElement(
            count++, element
        );
        completed_div.appendChild(element);
        toDoCounter.innerText = todo_list.length;
        toDoCounter.innerText = 'Tasks Pending ' + todo_list.length;
    });
}

function createCompletedTaskElement(id, description) {
    var div_element = document.createElement('div');
    div_element.classList.add('todo-item');
    div_element.classList.add('cross');
    var input_elemnt = document.createElement('input');
    input_elemnt.setAttribute('type', 'checkbox');
    var text = document.createElement('span');
    text.innerText = id + ". " + description;
    div_element.appendChild(input_elemnt);
    div_element.appendChild(text);
    return div_element;
}