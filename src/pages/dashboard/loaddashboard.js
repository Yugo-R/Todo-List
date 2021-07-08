export default function loadDashboard(content){
    //Clear page
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }

    content.innerHTML = "<div>Hello this is dashboard page</div>"

}