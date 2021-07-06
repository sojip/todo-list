const Project = (title) => {
    let toDos = [];
    const addToDo = (toDo) => {
        toDos.push(toDo);
    };
    const removeToDo = (toDoId) => {
        toDos.splice(toDoId, 1);
    };

    return {
        title,
        toDos,
        addToDo,
        removeToDo,
    };
};

const ProjectBoard = (() => {
    let projects = [];

    const addProject = (project) => {
        projects.push(project);
    };

    const deleteProject = (projectId) => {
        projects.splice(projectId, 1);
    };

    return {
        projects,
        addProject,
        deleteProject
    };
})();


export { Project, ProjectBoard };