import logoIcon from "./img/1.png";
import menuIcon from "./img/menu.png";
import addIcon from "./img/add.png";

function loadNav() {
    let content = document.querySelector("#content");
    let nav = document.createElement("nav");
    document.body.insertBefore(nav,content);
    let button = document.createElement("button");
    button.textContent = "New Project";
    button.setAttribute("id", "newProject");
    nav.appendChild(button);
    let div = document.createElement("div");
    div.classList.add("nav_content");
    nav.appendChild(div);
    let ul = document.createElement("ul");
    ul.classList.add("projects");
    div.appendChild(ul);
}


function loadContent() {
    let content = document.querySelector("#content");
    let projectTitle = document.createElement("h2");
    projectTitle.textContent = "Default";
    projectTitle.classList.add("projectTitle");
    content.appendChild(projectTitle);
    let div = document.createElement("div");
    div.classList.add("toDoContainer");
    content.appendChild(div);
    let add = new Image;
    add.src = addIcon;
    add.id = "newToDo";
    content.appendChild(add);
}

function loadHeader() {
    let header = document.querySelector("header");
    let div = document.createElement("div");
    div.classList.add("logo");
    let logo = new Image();
    logo.src = logoIcon;
    logo.setAttribute("id", "logo");
    div.appendChild(logo);
    let name = document.createElement("h1");
    name.textContent = "My To Do";
    div.appendChild(name);
    let menu = new Image();
    menu.src = menuIcon;
    menu.setAttribute("id", "menuIcon");
    header.appendChild(div);
    header.appendChild(menu);
}

export { loadNav, loadContent, loadHeader };