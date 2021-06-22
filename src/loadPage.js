import logoIcon from "./img/1.png";

function loadNav() {
    let content = document.querySelector("#content");
    let nav = document.createElement('nav');
    let ul = document.createElement('ul');
    ul.classList.add('projects');
    let item = document.createElement('li');
    item.textContent = "Default";
    ul.appendChild(item);
    let button = document.createElement('button');
    button.textContent = "New Project";
    button.setAttribute("id", "newProject")
    nav.appendChild(ul);
    nav.appendChild(button);
    content.appendChild(nav);
}

function loadContent() {
    let content = document.querySelector("#content");
    let projectTitle = document.createElement("h2");
    projectTitle.textContent = "Default";
    projectTitle.classList.add("projectTitle");
    content.appendChild(projectTitle);
    let div = document.createElement('div');
    div.classList.add("toDoContainer");
    content.appendChild(div);
    let button = document.createElement('button');
    button.textContent = "Add";
    button.id = "newToDo";
    content.appendChild(button)
}

function loadHeader() {
    let header = document.querySelector('header');
    let div = document.createElement("div");
    div.classList.add("logo");
    let logo = new Image();
    logo.src = logoIcon;
    logo.setAttribute("id", "logo");
    div.appendChild(logo);
    let name = document.createElement("h1");
    name.textContent = "My To Do";
    div.appendChild(name);
    header.appendChild(div);

}

export { loadNav, loadContent, loadHeader }