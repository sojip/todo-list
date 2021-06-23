let DOMStuff = (function() {
    const showModal = (modal) => modal.classList.add("opened");
    const hideModal = (modal) => modal.classList.remove("opened");

    const addToDo = (toDo) => {
        let container = document.querySelector("toDoContainer");
        let div = document.createElement('div');
        div.classList.add("toDo");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        div.appendChild(checkbox);
        let toDoId = document.createElement('input');
        toDoId.type = hidden;
        toDoId.textContent = App.projects[toDo.projectId].length;
        div.appendChild(toDoId)
        let title = document.createElement("p");
        title.textContent = toDo.title;
        div.appendChild(title);
        let dueDate = document.createElement("span");
        dueDate.textContent = toDo.dueDate;
        div.appendChild(dueDate);
        let priority = document.createElement("span");
        priority.textContent = toDo.priority;
        div.appendChild(priority);
        container.appendChild(div);
    }

    return {
        showModal,
        hideModal,
        addToDo,
    }
})()

export { DOMStuff }