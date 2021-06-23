import "./css/reset.css";
import "./css/style.css";
import { loadNav, loadContent, loadHeader } from "./loadPage.js";
import { Project } from "./project.js";
import { Todo } from "./todo.js";
import { DOMStuff } from "./domstuff.js"; 

loadHeader();
loadNav();
loadContent();


let App = (function () {
    let projects = [];

    let newToDo = document.querySelector("#newToDo");
    let newProject = document.querySelector("#newProject");
    let saveToDo = document.querySelectorAll("#saveToDo");
    let saveProject = document.querySelector("#saveProject");
    let addToDoModal = document.querySelector("[data-modalName='addToDo']");
    let addProjectModal = document.querySelector("[data-modalName='addProject']");

    newToDo.addEventListener("click", () => DOMStuff.showModal(addToDoModal));
    newProject.addEventListener("click", () => DOMStuff.showModal(addProjectModal));
    saveToDo.addEventListener("click", (e) => {
        e.preventDefault();
        createToDo();
        document.querySelector("#addToDo").reset();
        DOMStuff.hideModal(addToDoModal);
    })
    saveProject.addEventListener("click", () =>  {
        e.preventDefault();
        createProject();
        document.querySelector("#addProject").reset();
        DOMStuff.hideModal(addProjectModal);
    })


    //close modal
    document.addEventListener("click", (e)=> {
        let modals = document.querySelectorAll(".modal");
        if (Array.from(modals).includes(e.target)) e.target.classList.remove("opened");
    })

    return {
        projects,
    }

})()

const createToDo = () => {
    let title = document.querySelector("#title").value;
    let description = document.querySelector("#description").value;
    let dueDate = document.querySelector("#dueDate").value;
    let priority = document.querySelector("#priority").value;
    let project = document.querySelector("#project").value;
    // get value of project id
    let toDo = Todo(title, description, dueDate, priority, projectId);
    App.projects[projectId].toDos.push(toDo);
    DOMStuff.addToDo(toDo);   
}