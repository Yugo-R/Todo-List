import openModal from './openModal';
import addTask from './addTask';

export default function loadQuickDO(content){
    //Clear page
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }

    //fill the page with html template
    content.innerHTML = "<div id='quick-content'><div class='quick-title'>Quick-Do</div><button id='add-task'>+ Add task</button>";
    const quickContent = document.getElementById('quick-content');

    // Create task.
    quickContent.addEventListener('click', (e)=>{
        if(e.target.id == 'add-task'){
            openModal(quickContent);
        }
    });
    
}