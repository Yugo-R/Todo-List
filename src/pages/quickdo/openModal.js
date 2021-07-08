import validateForm from "./validForm";
import saveTask from "./savetask";
import closeModal from "./modal";
import displayNewtask from "./displaynewtask";
import addTask from "./addTask";

export default function makeTask(content){
    let modal = document.querySelector('.modal');
    let addTaskBtn = document.querySelector('#add-task');

    modal.classList.add('active');

    let btn = document.querySelectorAll('#submit, #cancel');

    btn.forEach(button => (
        button.addEventListener('click', (e)=>{
            let btnName = button.id;
            switch(btnName){
                case 'submit':
                    if(validateForm(modal)){
                        saveTask(modal);
                        content.insertBefore(displayNewtask(modal),addTaskBtn);
                        closeModal(modal);
                    };
                    break
                case 'cancel':
                    closeModal(modal);
                    break
                default:
                    closeModal(modal);
                    break;
            }
        })
    )); 
}