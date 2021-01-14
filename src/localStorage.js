class project {
    constructor(t, d, des){
        this.title = t,
        this.date = d,
        this.description = des,
        this.sub = []
    }
}

const addSubToLoc = (mainTitle, subTitle) => {
    const currentObj = JSON.parse(localStorage.getItem(mainTitle));
    currentObj.sub.push(subTitle);
    const currentObjStr = JSON.stringify(currentObj);
    localStorage.setItem(mainTitle, currentObjStr);
}
const saveLoc = (title, date, description) => {
    const newProject = new project(title, date, description);
    const strObj = JSON.stringify(newProject);
    localStorage.setItem(title, strObj);
}
const deleteFromLoc = (mainTitle, subTitle, directParent) => {
    
    if(directParent.classList.contains("project-div")){
        localStorage.removeItem(mainTitle);
    }else{
        const proObj = JSON.parse(localStorage.getItem(mainTitle));
        proObj.sub.splice(proObj.sub.indexOf(subTitle), 1);
        const newObj = JSON.stringify(proObj);
        console.log(newObj)
        localStorage.setItem(mainTitle, newObj);
    }
    
}

export { saveLoc, addSubToLoc, deleteFromLoc }