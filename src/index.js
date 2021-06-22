import "./css/reset.css";
import "./css/style.css";
import { loadNav, loadContent, loadHeader } from "./loadPage.js";

loadHeader();
loadNav();
loadContent();

let DOMStuff = (function() {
    function createModal () {
        let modal = document.createElement('div');
        modal.classList.add('modal');
        let form = document.createElement('form');
        let title = document.createElement('label');
        title.setAttribute('for', "title");
        title.textContent = "Title";
        form.appendChild(title);
        let titleInput = document.createElement("input");
        titleInput.type = "text";
        titleInput.id = "title";
        form.appendChild(titleInput);
        modal.appendChild(form);
        document.body.appendChild(modal);
    }

    return {
        createModal,
    }
})()

let App = (function () {
    let projects = [];

    let button = document.querySelector("#newToDo");
    button.addEventListener("click", DOMStuff.createModal)
    return {
        projects,
    }

})()

