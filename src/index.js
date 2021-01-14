import { addMain } from "./add-main-project";
import { saveLoc } from "./localStorage";
import { addSubPro } from "./icon";

let proTitle = document.getElementById("title");
let proDescription = document.getElementById("description");
let proDate = document.getElementById("date");

const addButton = document.getElementById("project-add");
addButton.addEventListener("click", () => {
    saveLoc(proTitle.value, proDate.value, proDescription.value);
    addMain(proTitle.value, proDate.value, proDescription.value);
});


for(let i = 0; i < localStorage.length; i++){
    const currentPro = JSON.parse(localStorage.getItem(localStorage.key(i)))
    addMain(currentPro.title, currentPro.date, currentPro.description);
    for(let j = 0; j < currentPro.sub.length; j++){
        const subPro = document.createElement("div");
        subPro.className = "subproject-div";
        addSubPro(subPro, currentPro.sub[j]);
        document.body.lastChild.appendChild(subPro);
    }
}
