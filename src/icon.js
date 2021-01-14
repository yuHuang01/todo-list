import { addSubToLoc, deleteFromLoc } from "./localStorage";

const checkSubPro = function(e){
    if(e.keyCode === 13){
        const titleOfPro = e.target.parentNode.parentNode.firstChild.textContent;
        const valueOfInput = document.getElementById("sub-pro-input").value;
        addSubToLoc(titleOfPro, valueOfInput);
        const subProDiv = e.target.parentNode
        addSubPro(subProDiv, valueOfInput);
        e.target.parentNode.removeChild(document.getElementById("sub-pro-input"));
        }
    }

const addSubPro = function(cDiv, title){
        const subTitle = document.createElement("p");
            subTitle.className = "title";
            subTitle.textContent = title;
        const doneIcon = document.createElement("span");
            doneIcon.classList = "material-icons icon done-icon sub-div-icon";
            doneIcon.textContent = "done_outline";
            doneIcon.addEventListener("click", iconFunc)
        const deleteIcon = document.createElement("span");
            deleteIcon.classList = "material-icons icon delete-icon";
            deleteIcon.textContent = "delete_outline";
            deleteIcon.addEventListener("click", iconFunc);
        cDiv.appendChild(subTitle);
        cDiv.appendChild(doneIcon);
        cDiv.appendChild(deleteIcon);
}

const iconFunc = function(e){
    const iconClasses = e.target.classList;
    if(iconClasses.contains("add-icon")){
        const cProDiv = e.target.parentNode;
        if(cProDiv.lastChild.firstChild.id !== "sub-pro-input"){
           let subDiv = document.createElement("div");
                subDiv.className = "subproject-div";
            let title = document.createElement("input");
                title.type = "text";
                title.className = "sub-title-input";
                title.id = "sub-pro-input";
            subDiv.appendChild(title);
            title.addEventListener("keydown", checkSubPro);
            e.target.parentNode.appendChild(subDiv); 
        }else{
            alert("You have to give a title to the previous task you wanted to input!")
        }
    }else if(iconClasses.contains("done-icon")){
            const title = e.target.parentNode.firstElementChild;
            title.style.textDecoration = "line-through";
    }else{ 
            const parent = e.target.parentNode;
            const grandParent = parent.parentNode;
            const mainT = grandParent.getElementsByTagName("P")[0].textContent;
            const subT = parent.getElementsByTagName("P")[0].textContent;
            grandParent.removeChild(parent);
            deleteFromLoc(mainT, subT, parent);
    }
}

export {iconFunc, addSubPro }
