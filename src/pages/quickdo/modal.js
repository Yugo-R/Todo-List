export let modalAction = ()=>{
    let modal = document.querySelector('.modal');
    return {
        open: () => modal.classList.add('active'),
        close: () => modal.classList.remove('active')
    }
} 



// export default function closeModal(form){
//     form.classList.remove('active');
// }

// function openModal(){
//     let modal = document.querySelector('.modal');
//     modal.classList.add('active');
// }