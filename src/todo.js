function Todo (title, description, dueDate, priority, projectId, isDone = false) {

    const toggleisDone = () => isDone = !isDone;
    const update = (title, description, dueDate, priority, projectId) => {
        title = title;
        description = description;
        dueDate = dueDate;
        priority = priority;
        projectId = projectId;
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