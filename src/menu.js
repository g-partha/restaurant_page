import imageFoieGras from "./resources/foie-gras.jpg";
import imageRisoto from "./resources/risoto.jpg";
import imageFriedChicken from "./resources/fried-chicken.jpg";

class MenuItems{
    constructor(name, description, image){
        this.name = name;
        this.description = description;
        this.image = image;
    }
}

const menuItemsCollection = [(new MenuItems("Foie Gras", "description of the item", imageFoieGras)),
                            (new MenuItems("Risoto", "description of the item", imageRisoto)),
                            (new MenuItems("Fried Chicken", "description of the item", imageFriedChicken))]
export const createMenuPage(){
    const menuPageContainer = document.createElement("div");
    menuPageContainer.setAttribute("id", "menu-page-container");
    const menuItemsList = document.createElement("div");
    menuItemsList.setAttribute("id", "menu-items-list");
    const menuItemsCard = [];
    const menuItemsCardTitle = [];
    const menuItemsCardDescription = [];
    const menuItemsCardImage = [];
    for(let i = 0; i < menuItemsCollection.length; i++){
        menuItemsCard[i] = document.createElement("div");
        menuItemsCard[i].classList.toggle("menu-items-card");
        menuItemsCardTitle[i] = document.createElement("div");
        menuItemsCardTitle[i].classList.toggle("menu-items-card-title");
        menuItemsCardTitle[i].textContent = menuItemsCollection[i].name;
        menuItemsCard[i].appendChild(menuItemsCardTitle[i]);
        menuItemsCardDescription[i] = document.createElement("div");
        menuItemsCardDescription[i].classList.toggle("menu-items-card-description");
        menuItemsCardDescription[i].textContent = menuItemsCollection[i].description;
        menuItemsCard[i].appendChild(menuItemsCardDescription[i]);
        menuItemsCardImage[i] = document.createElement("div");
        menuItemsCardImage[i].classList.toggle("menu-items-card-image");
        menuItemsCardImage[i].src = menuItemsCollection[i].image;
        menuItemsCard[i].appendChild(menuItemsCardImage[i]);
        menuItemsList.appendChild(menuItemsCard[i]);
    }
    menuPageContainer.appendChild(menuItemsList);
    content.textContent = "";
    content.appendChild(menuPageContainer);
}