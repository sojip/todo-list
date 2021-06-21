
function loadNav() {
    let content = document.querySelector("#content");
    let nav = document.createElement('nav');
    let title = document.createElement('h1');
    title.textContent = "To Do";
    nav.appendChild(title);
    let ul = document.createElement('ul');
    ul.classList.add('projects');
    let item = document.createElement('li');
    item.textContent = "Default";
    ul.appendChild(item);
    let button = document.createElement('button');
    button.textContent = "New Project";
    nav.appendChild(ul);
    nav.appendChild(button);
    content.appendChild(nav);
}

function loadContent() {
    let content = document.querySelector("#content");
    let projectTitle = document.createElement("h2");
    projectTitle.textContent = "Default";
    content.appendChild(projectTitle);
    let div = document.createElement('div');
    div.classList.add("toDoContainer");
    content.appendChild(div);
    let button = document.createElement('button');
    button.textContent = "Add";
    content.appendChild(button)
}

export { loadNav, loadContent }