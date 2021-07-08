export let modalAction = ()=>{
    let modal = document.querySelector('.modal');
    let title = modal.querySelector('#taskTitle');
    let date = modal.querySelector('#taskDate');
    let priority = modal.querySelector('#priority');
    let description = modal.querySelector('#taskDescription');

    return {
        open: () => modal.classList.add('active'),
        close: () => modal.classList.remove('active'),
        validateForm: ()=>{
            if(!title.value){
                title.focus();
                return alert('Please give your task a title!');
                }
            if(!date.value){
                date.focus();
                return alert('Please select a date for your task!');
            }
        
            return true;
        },
        saveTask: ()=>{
            let obj = {
                title: title.value,
                date: date.value,
                priority: priority.value,
                description: description.value
            }

            localStorage.setItem(obj['title'], JSON.stringify(obj));
        },
        displayNewtask: ()=>{
            let task = document.createElement('div');
            task.className = 'task';
            
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'task-title';
            checkbox.id = `checkbox-${title.value}`;

            let checkboxLabel = document.createElement('Label');
            checkboxLabel.setAttribute('for', checkbox.id);
            checkboxLabel.innerHTML = title.value;

            let dueDate = document.createElement('span');
            dueDate.innerHTML = date.value;

            let taskBtn = document.createElement('div');
            taskBtn.className = "task-action";

            let modify = document.createElement('button');
            modify.className = "task-btn";
            modify.id = 'edit-btn';
            modify.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>';

            let garbage = document.createElement('button');
            garbage.className = "task-btn";
            garbage.id = 'delete-btn';
            garbage.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg>'

            taskBtn.appendChild(modify);
            taskBtn.appendChild(garbage);

            task.appendChild(checkbox);
            task.appendChild(checkboxLabel);
            task.appendChild(dueDate);
            task.appendChild(taskBtn);

            return task;
        },
        resetForm: ()=>{
            modal.reset();
        }
    }
}


//To check if the form is valid
// export default function validateForm(form){
//     let title = form.querySelector('#taskTitle');
//     let date = form.querySelector('#taskDate');

//     if(!title.value){
//         title.focus();
//         return alert('Please give your task a title!');
//         }
//     if(!date.value){
//         date.focus();
//         return alert('Please select a date for your task!');
//     }

//     return true;
// }

//Save form data to json storage
// export default function saveTask(form){
//     let title = form.querySelector('#taskTitle');
//     let date = form.querySelector('#taskDate');
//     let priority = form.querySelector('#priority');
//     let description = form.querySelector('#taskDescription');

//     let obj = {
//         title: title.value,
//         date: date.value,
//         priority: priority.value,
//         description: description.value
//     }

//     localStorage.setItem(obj['title'], JSON.stringify(obj));

//     console.log(localStorage);
// }

//Display the task in the page
export default function displayNewtask(form){
    let task = document.createElement('div');

    task.className = 'task';

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'task-title';

    let checkboxLabel = document.createElement('Label');
    checkboxLabel.setAttribute('for', checkbox.id);
    checkboxLabel.innerHTML = form.querySelector('#taskTitle').value;

    let date = document.createElement('span');
    date.innerHTML = form.querySelector('#taskDate').value;

    let taskBtn = document.createElement('div');
    taskBtn.className = "task-action";

    let modify = document.createElement('button');
    modify.className = "task-btn";
    modify.id = 'edit-btn';
    modify.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>';

    let garbage = document.createElement('button');
    garbage.className = "task-btn";
    garbage.id = 'delete-btn';
    garbage.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg>'

    taskBtn.appendChild(modify);
    taskBtn.appendChild(garbage);

    task.appendChild(checkbox);
    task.appendChild(checkboxLabel);
    task.appendChild(date);
    task.appendChild(taskBtn);

    

    return task;
}