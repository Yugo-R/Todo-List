import loadDashboard from './pages/dashboard/loaddashboard';
import loadQuickDO from './pages/quickdo/loadquickpage';
import loadProjects from './pages/projects/loadprojects';
import "./style/style.scss";

const openNavButton = document.querySelectorAll('[data-nav-btn]');
const content = document.querySelector('.content');
let activePage;

// When page load
window.onload = function(){
    loadDashboard(content);
    let page = document.querySelector('.dashboard');
    page.classList.add('active');
    activePage = page;
    localStorage.clear();
}

openNavButton.forEach(button => {
    button.addEventListener('click', () =>{
        let page = button.dataset.navBtn;
        // #TODO load page content
        switch(page){
            case '.quickDo':
                loadQuickDO(content);
                break;
            case '.projects':
                loadProjects(content);
                break;
            default:
                loadDashboard(content);
        }

        // Change active page navbar bttn to white
        activePage.classList.remove('active');
        let currentPage = document.querySelector(page);
        currentPage.classList.add('active');
        activePage = currentPage;
    })
})


