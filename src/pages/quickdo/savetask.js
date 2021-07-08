export default function saveTask(form){
    let title = form.querySelector('#taskTitle');
    let date = form.querySelector('#taskDate');
    let priority = form.querySelector('#priority');
    let description = form.querySelector('#taskDescription');

    let obj = {
        title: title.value,
        date: date.value,
        priority: priority.value,
        description: description.value
    }

    localStorage.setItem(obj['title'], JSON.stringify(obj));

    console.log(localStorage);
}