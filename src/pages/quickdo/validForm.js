export default function validateForm(form){
    let title = form.querySelector('#taskTitle');
    let date = form.querySelector('#taskDate');

    if(!title.value){
        title.focus();
        return alert('Please give your task a title!');
        }
    if(!date.value){
        date.focus();
        return alert('Please select a date for your task!');
    }

    return true;
}