import {ProjectBoard} from "./project.js";

let DOMStuff = (function() {
    const showModal = (modal) => modal.classList.add("opened");
    const hideModal = (modal) => modal.classList.remove("opened");

    const addToDo = (toDo) => {
        let container = document.querySelector(".toDoContainer");
        let div = document.createElement('div');
        div.classList.add("toDo");
        let toDoId = ProjectBoard.projects[toDo.projectId].toDos.indexOf(toDo);
        div.setAttribute("toDoid", toDoId);
        div.setAttribute("projectId", toDo.projectId);
        let div_ = document.createElement("div");
        div.appendChild(div_);
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        div_.appendChild(checkbox);
        let title = document.createElement("div");
        title.classList.add("title");
        title.textContent = toDo.title;
        div_.appendChild(title);
        let dueDate = document.createElement("div");
        dueDate.classList.add("dueDate");
        dueDate.textContent = toDo.dueDate;
        div.appendChild(dueDate);
        let priority = document.createElement("div");
        priority.classList.add("priority");
        priority.textContent = toDo.priority;
        div.appendChild(priority);
        container.appendChild(div);
    }

    const addProjToNav = (project) => {
        let ul = document.querySelector(".projects");
        let projectId = ProjectBoard.projects.indexOf(project);
        let item = document.createElement('li');
        item.setAttribute("data-projectId", projectId)
        item.textContent = project.title;
        ul.appendChild(item);
    }

    const addProjToSelect = (project) => {
        let select = document.querySelector("#project");
        let option = document.createElement("option");
        option.value = project.title;
        let projectId = ProjectBoard.projects.indexOf(project);
        option.setAttribute("data-projectId", projectId);
        option.textContent = project.title;
        select.appendChild(option);
    }

    return {
        showModal,
        hideModal,
        addToDo,
        addProjToNav,
        addProjToSelect

    }
})()

export { DOMStuff }