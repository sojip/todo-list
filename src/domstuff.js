import {ProjectBoard} from "./project.js";
import deleteIcon from "./img/trash.png";


let DOMStuff = (function() {
    const showModal = (modal) => {
        if (modal.getAttribute("data-modalName") === "newToDo") {
            let action = document.querySelector("#action_");
            action.textContent = "Add To Do";
            document.querySelector("#project").disabled = false;
        }
        modal.classList.add("opened");
       
    };
    const hideModal = (modal) => modal.classList.remove("opened");
    const editToDo = (toDo) => {
        let modal = document.querySelector("[data-modalName='newToDo']");
        let form = document.querySelector("#toDoInfos");
        let action = document.querySelector("#action_");
        modal.classList.add("opened");
        form.classList.add("update");
        let todoId = document.createElement("input");
        todoId.setAttribute("name", "todoId");
        todoId.type = "hidden";
        todoId.value = ProjectBoard.projects[toDo.projectId].toDos.indexOf(toDo);
        form.appendChild(todoId);
        let projectId = document.createElement("input");
        projectId.setAttribute("name", "projectId");
        projectId.type = "hidden";
        projectId.value = toDo.projectId;
        form.appendChild(projectId);
        action.textContent = "Edit To Do"; 
        document.querySelector("#title").value = toDo.title;
        document.querySelector("#description").value = toDo.description;
        document.querySelector("#dueDate").value = toDo.dueDate;
        document.querySelector("#priority").value = toDo.priority;
        document.querySelector("#project").value = ProjectBoard.projects[toDo.projectId].title;
        document.querySelector("#project").disabled = true;
    }

    const updateToDo = (projectId, todoId) => {
        let toDos = Array.from(document.querySelectorAll(".toDo"));
        let todo = ProjectBoard.projects[projectId].toDos[todoId];
        for (const toDo of toDos) {
            if (Number(toDo.getAttribute("projectid")) === projectId && Number(toDo.getAttribute("todoid")) === todoId) {
                toDo.childNodes[1].textContent = todo.dueDate;
                toDo.childNodes[0].childNodes[1].textContent = todo.title;
            }
        }
    }

    const addToDo = (toDo) => {
        let activeProject = document.querySelector(".active");
        let activeProjectId = activeProject.getAttribute("data-projectid");
        if(activeProjectId === toDo.projectId) {
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
            if(toDo.isDone) {
                checkbox.checked = true;
                div.classList.add("done");
            }
            div_.appendChild(checkbox);
            let title = document.createElement("div");
            title.classList.add("title");
            title.textContent = toDo.title;
            div_.appendChild(title);
            let dueDate = document.createElement("div");
            dueDate.classList.add("dueDate");
            dueDate.textContent = toDo.dueDate;
            div.appendChild(dueDate);
            let delete_ = new Image;
            delete_.src = deleteIcon;
            delete_.classList.add("delete");
            div.appendChild(delete_);
            div.addEventListener("click", (e) => {
                let projectId = div.getAttribute("projectid");
                let toDoId = div.getAttribute("todoid");
                let toDo = ProjectBoard.projects[projectId].toDos[toDoId];
                if (e.target.type === "checkbox") {
                    toDo.toggleisDone();
                    div.classList.toggle("done");
                }

                else if (e.target.classList.contains("delete")) {
                    ProjectBoard.projects[projectId].removeToDo(toDoId);
                    let toDoChilds = document.querySelectorAll(".toDo");
                    toDoChilds.forEach((todo) => {container.removeChild(todo)});
                    for (const todo of ProjectBoard.projects[projectId].toDos) {
                        addToDo(todo)
                    }
                }
                else {
                    editToDo(toDo);
                }
            });
            container.appendChild(div);
        }      
    }

    const addProjToNav = (project) => {
        let ul = document.querySelector(".projects");
        let projectId = ProjectBoard.projects.indexOf(project);
        let item = document.createElement('li');
        item.setAttribute("data-projectId", projectId)
        item.textContent = project.title;
        //add event listenner
        item.addEventListener("click", () => {
            let active = document.querySelector(".active");
            active.classList.remove("active");
            item.classList.add("active");
            let projectTitle = document.querySelector(".projectTitle");
            let projectId = item.getAttribute("data-projectId");
            projectTitle.textContent = ProjectBoard.projects[projectId].title;
            let toDos = ProjectBoard.projects[projectId].toDos;
            let toDoContainer = document.querySelector(".toDoContainer");
            let toDoChilds = document.querySelectorAll(".toDo");
            toDoChilds.forEach((todo) => {toDoContainer.removeChild(todo)});
            for (const toDo of toDos) {
                addToDo(toDo);
            }
        })
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
        updateToDo,
        addProjToNav,
        addProjToSelect

    }
})()

export { DOMStuff }