const Todo = (title, description, dueDate, priority, projectId, isDone = false) => {

    const toggleisDone = function() {
        this.isDone = !this.isDone;
    };
    const update = function (title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }


    return {
        title,
        description,
        dueDate,
        priority,
        projectId,
        isDone,
        toggleisDone,
        update
    }
}

export { Todo }