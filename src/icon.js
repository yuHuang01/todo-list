export default class icon {
    makeSubPro(e){
        if(e.keyCode === 13){
            const subTitle = document.createElement("p");
                subTitle.className = "title";
                subTitle.textContent = document.getElementById("sub-pro-input").value;
            const doneIcon = document.createElement("span");
                doneIcon.classList = "material-icons icon done-icon sub-div-icon";
                doneIcon.textContent = "done_outline";
            const deleteIcon = document.createElement("span");
                deleteIcon.classList = "material-icons icon delete-icon";
                deleteIcon.textContent = "delete_outline";
            const subDiv = document.getElementById("sub-div");
            subDiv.removeChild(document.getElementById("sub-pro-input"));
            subDiv.appendChild(subTitle);
            subDiv.appendChild(doneIcon);
            subDiv.appendChild(deleteIcon);
        }
    }
    iconFunc(e){
        const iconClasses = e.target.classList;
        if(iconClasses.contains("add-icon")){
            let subDiv = document.createElement("div");
                subDiv.className = "subproject-div";
                subDiv.id = "sub-div";
            let title = document.createElement("input");
                title.type = "text";
                title.className = "sub-title-input";
                title.id = "sub-pro-input";
            subDiv.appendChild(title);
            window.addEventListener("keydown", this.makeSubPro);
            e.target.parentNode.appendChild(subDiv);

        }else if(iconClasses.contains("done-icon")){
            const title = e.target.parentNode.firstElementChild;
            title.style.textDecoration = "line-through";
        }else{
            const parent = e.target.parentNode;
            const grandParent = parent.parentNode;
            grandParent.removeChild(parent)
        }
    }
    
}