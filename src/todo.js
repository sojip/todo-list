const Todo = (title, description, dueDate, priority, projectId, isDone = false) => {

    const toggleisDone = function() {
        this.isDone = !this.isDone;
    };

    return {
        title,
        description,
        dueDate,
        priority,
        projectId,
        isDone,
        toggleisDone,

    }
}

export { Todo }