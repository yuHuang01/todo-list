import { iconFunc } from "./icon";

const addMain = function(title, deadline, description){
    const mainPro = document.createElement("div");
        mainPro.className = "project-div";
    const titlePro = document.createElement("p");
        titlePro.className = "title";
        titlePro.textContent = title;
    const deadlinePro = document.createElement("p");
        deadlinePro.className = "deadline";
        deadlinePro.textContent = deadline;    
    const descriptionPro = document.createElement("p");
        descriptionPro.className = "description";
        descriptionPro.textContent = description;
    const addPro = document.createElement("span");
        addPro.classList = "material-icons icon add-icon";
        addPro.textContent = "add";
        addPro.addEventListener("click", iconFunc)
    const donePro = document.createElement("span");
        donePro.classList = "material-icons icon done-icon";
        donePro.textContent = "doneoutline";
        donePro.addEventListener("click", iconFunc)
    const deleteI = document.createElement("span");
        deleteI.classList = "material-icons icon delete-icon";
        deleteI.textContent = "deleteoutline";
        deleteI.addEventListener("click", iconFunc)
    mainPro.appendChild(titlePro);
    mainPro.appendChild(deadlinePro);
    mainPro.appendChild(descriptionPro);
    mainPro.appendChild(addPro);
    mainPro.appendChild(donePro);
    mainPro.appendChild(deleteI);
    document.body.appendChild(mainPro)
    clearInput();
};

const clearInput = () => {
    let proTitle = document.getElementById("title");
    let proDescription = document.getElementById("description");
    let proDate = document.getElementById("date");
    proTitle.value = "";
    proDate.value = "";
    proDescription.value = "";
}

export { addMain };