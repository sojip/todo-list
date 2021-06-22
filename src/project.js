function Project(title) {
    let toDos = [];
    addToDo = (toDo) => {
        toDos.push(toDo);
    }
    removeToDo = (id) => {
        toDos.splice(id, 1)
    }

    return {
        title,
        toDos,
        addToDo,
        removeToDo,
    }
}