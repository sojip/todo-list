const Project = (title) => {
    let toDos = [];
    const addToDo = (toDo) => {
        toDos.push(toDo);
    }
    const removeToDo = (toDoId) => {
        toDos.splice(toDoId, 1);
    }
    const updateToDo = (toDoId, title, description, dueDate, priority) => {
        toDos[toDoId].title = title;
        toDos[toDoId].description = description;
        toDos[toDoId].dueDate = dueDate;
        toDos[toDoId].priority = priority;
    }

    return {
        title,
        toDos,
        addToDo,
        removeToDo,
        updateToDo
    }
}

const ProjectBoard = (() => {
    let projects = [];

    const addProject = (project) => {
        projects.push(project);
    }

    const deleteProject = (projectId) => {
        projects.splice(projectId, 1);
    }

    return {
        projects,
        addProject,
        deleteProject
    }
})()


export { Project, ProjectBoard };