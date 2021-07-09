import { modalAction } from './modalAction';

export default function loadQuickDO(content){
    //Clear page
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
    //fill the page with html template
    content.innerHTML = "<div id='quick-content'><div class='quick-title'>Quick-Do</div><button id='add-task'>+ Add task</button>";
    const quickContent = document.getElementById('quick-content');
    let addTaskBtn = document.querySelector('#add-task');

    let modal = modalAction();

    window.addEventListener('click', (e)=>{
        let btn = e.target.id;
        switch(btn){
            case 'add-task':
                modal.open();
                break;
            case 'cancel':
                modal.close();
                modal.resetForm();
                break; 
            case 'submit':
                if(modal.validateForm()){
                    modal.saveTask();
                    quickContent.insertBefore(modal.displayNewtask(),addTaskBtn);
                    modal.close();
                    modal.resetForm();
                };
                break;
            case 'delete-task':
                document.querySelector(`#${e.target.dataset.parentDiv}`).remove();
        }
    });

    // content.addEventListener('click', (e)=>{
    //     let contentBtn = e.target.id;
    //     switch(contentBtn){
    //         case 'delete-task':
    //             alert("it's fucking workign bitch!");
    //         break;
    //     }
    // })
}