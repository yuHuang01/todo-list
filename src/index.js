import icon from "./icon";
import LocalStoreInt from "./localStorage";

const iconFunctions = new icon;
const boundIconFunc = iconFunctions.iconFunc.bind(iconFunctions)
const addIcons = document.querySelectorAll(".icon");
    for(let i = 0; i < addIcons.length; i++){
        addIcons[i].addEventListener("click", boundIconFunc)
    }