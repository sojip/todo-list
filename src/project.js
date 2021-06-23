function Project(title) {
    let toDos = [];
    addToDo = (toDo) => {
        toDos.push(toDo);
    }
    removeToDo = (toDoId) => {
        toDos.splice(toDoId, 1)
    }

    return {
        title,
        toDos,
        addToDo,
        removeToDo,
    }
}

export { Project }