import "./css/reset.css";
import "./css/style.css";
import { loadNav, loadContent, loadHeader} from "./loadPage.js";
import { Project, ProjectBoard } from "./project.js";
import { Todo } from "./todo.js";
import { DOMStuff } from "./domstuff.js";



const App = (function () {
    loadHeader();
    loadNav();
    loadContent();
     // create default project
    let defaultProject = Project("default");
    // save the project
    ProjectBoard.addProject(defaultProject);
    //add to the DOM
    DOMStuff.addProjToSelect (defaultProject);
    DOMStuff.addProjToNav(defaultProject);
    let active = document.querySelector(".projects").firstChild;
    active.classList.add("active");

    

    let newToDo = document.querySelector("#newToDo");
    let newProject = document.querySelector("#newProject");
    let saveToDo = document.querySelector("#saveToDo");
    let saveProject = document.querySelector("#saveProject");
    let newToDoModal = document.querySelector("[data-modalName='newToDo']");
    let newProjectModal = document.querySelector("[data-modalName='newProject']");
    let menuIcon = document.querySelector("#menuIcon");
    let close = document.querySelectorAll(".close");

    newToDo.addEventListener("click", () => DOMStuff.showModal(newToDoModal));
    newProject.addEventListener("click", () => DOMStuff.showModal(newProjectModal));
    
    saveToDo.addEventListener("click", (e) => {
        e.preventDefault();  
        let form = document.querySelector("#toDoInfos");  
        let title = document.querySelector("#title").value;
        let description = document.querySelector("#description").value;
        let dueDate = document.querySelector("#dueDate").value;
        let priority = document.querySelector("#priority").value;
        let select = document.querySelector("#project");
        let projectId = select.options[select.selectedIndex].getAttribute("data-projectId");
        // if it is an update
        if(form.classList.contains("update")) {
            let projectId = Number(document.getElementsByName("projectId")[0].value);
            let todoId = Number(document.getElementsByName("todoId")[0].value);
            let todo = ProjectBoard.projects[projectId].toDos[todoId];
            todo.update(title, description, dueDate, priority);
            DOMStuff.updateToDo(projectId, todoId);
            form.classList.remove("update");
            form.removeChild(document.getElementsByName("projectId")[0]);
            form.removeChild(document.getElementsByName("todoId")[0]);
        }
        else {
            let toDo = Todo(title, description, dueDate, priority, projectId);
            ProjectBoard.projects[projectId].addToDo(toDo);
            DOMStuff.addToDo(toDo);
            }
        form.reset();
        DOMStuff.hideModal(newToDoModal);
    });

    saveProject.addEventListener("click", (e) =>  {
        e.preventDefault();
        let title =  document.querySelector("#title_").value;
        let project = Project(title);
        ProjectBoard.addProject(project);
        document.querySelector("#projectInfos").reset();
        DOMStuff.hideModal(newProjectModal);
        DOMStuff.addProjToSelect(project);
        DOMStuff.addProjToNav(project);
    });

    menuIcon.addEventListener("click", () => {
        let nav = document.querySelector("nav");
        let content =  document.querySelector("#content");
        nav.classList.toggle("hide");
        content.classList.toggle("full");
        
    });

    close.forEach((button) => {
        button.addEventListener("click" , () => {
            let modal = document.querySelector(".opened");
            DOMStuff.hideModal(modal);
        });
    });

    //close modal
    document.addEventListener("click", (e)=> {
        let modals = document.querySelectorAll(".modal");
        let forms = document.querySelectorAll("form");
        if (Array.from(modals).includes(e.target)) {
            forms.forEach((form)=> {
                if (form.classList.contains("update")) {
                    form.classList.remove("update");
                    form.removeChild(document.getElementsByName("projectId")[0]);
                    form.removeChild(document.getElementsByName("todoId")[0]);
                }
                form.reset();
            });
            DOMStuff.hideModal(e.target);
        } 
    });

    return;

})();

 

