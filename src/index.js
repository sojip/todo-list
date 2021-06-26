import "./css/reset.css";
import "./css/style.css";
import { loadNav, loadContent, loadHeader} from "./loadPage.js";
import { Project, ProjectBoard } from "./project.js";
import { Todo } from "./todo.js";
import { DOMStuff } from "./domstuff.js";

loadHeader();
loadNav();
loadContent();

const App = (function () {
     // create default projects
    let defaultProject = Project("default");
    let anotherProject = Project("another");
    // save the projects
    ProjectBoard.addProject(defaultProject);
    ProjectBoard.addProject(anotherProject);

    //add to the projects dropdown classList
     DOMStuff.addProjToSelect (defaultProject);
     DOMStuff.addProjToSelect (anotherProject);

     DOMStuff.addProjToNav(defaultProject);
     DOMStuff.addProjToNav(anotherProject);

    

    let newToDo = document.querySelector("#newToDo");
    let newProject = document.querySelector("#newProject");
    let saveToDo = document.querySelector("#saveToDo");
    let saveProject = document.querySelector("#saveProject");
    let newToDoModal = document.querySelector("[data-modalName='newToDo']");
    let newProjectModal = document.querySelector("[data-modalName='newProject']");

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
            let project = ProjectBoard.projects[projectId];
            project.updateToDo(todoId, title, description, dueDate, priority);
            DOMStuff.updateToDo(projectId, todoId)
            form.classList.remove("update")
            form.removeChild(document.getElementsByName("projectId")[0]);
            form.removeChild(document.getElementsByName("todoId")[0]);
        }
        else {
            let toDo = Todo(title, description, dueDate, priority, projectId)
            ProjectBoard.projects[projectId].addToDo(toDo);
            DOMStuff.addToDo(toDo);
            }
        form.reset();
        DOMStuff.hideModal(newToDoModal);
    })

    saveProject.addEventListener("click", () =>  {
        e.preventDefault();
        createProject();
        document.querySelector("#projectInfos").reset();
        DOMStuff.hideModal(newProjectModal);
    })

    //close modal
    document.addEventListener("click", (e)=> {
        let modals = document.querySelectorAll(".modal");
        let forms = document.querySelectorAll("form");
        if (Array.from(modals).includes(e.target)) {
            forms.forEach((form)=> {
                if (form.classList.contains("update")) {
                    form.classList.remove("update")
                    form.removeChild(document.getElementsByName("projectId")[0]);
                    form.removeChild(document.getElementsByName("todoId")[0]);
                }
                form.reset()
            })
            DOMStuff.hideModal(e.target);
        } 
    })

    return

})()

 

