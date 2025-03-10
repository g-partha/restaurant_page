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

const descriptionFoieGras = "A symbol of culinary luxury, foie gras is rich, buttery, and decadently smooth. Whether as a pâté or seared to perfection, its indulgent flavor is unmatched - though its production remains controversial.";
const descriptionRisoto = "Creamy, velvety, and deeply comforting, risotto is Italian elegance in a bowl. Slowly simmered and stirred to perfection, it transforms humble rice into pure indulgence.";
const descriptionFC = "Golden, crispy, and irresistibly juicy, fried chicken is the ultimate comfort food. With a crunchy crust and tender meat, every bite is pure satisfaction.";

const menuItemsCollection = [new MenuItems("Foie Gras", descriptionFoieGras, imageFoieGras),
                            new MenuItems("Risoto", descriptionRisoto, imageRisoto),
                            new MenuItems("Fried Chicken", descriptionFC, imageFriedChicken)]
export const createMenuPage = () => {
    content.textContent = "";
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
        menuItemsCardImage[i] = document.createElement("img");
        menuItemsCardImage[i].classList.toggle("menu-items-card-image");
        menuItemsCardImage[i].src = menuItemsCollection[i].image;
        menuItemsCard[i].appendChild(menuItemsCardImage[i]);
        menuItemsCardTitle[i] = document.createElement("div");
        menuItemsCardTitle[i].classList.toggle("menu-items-card-title");
        menuItemsCardTitle[i].textContent = menuItemsCollection[i].name;
        menuItemsCard[i].appendChild(menuItemsCardTitle[i]);
        menuItemsCardDescription[i] = document.createElement("div");
        menuItemsCardDescription[i].classList.toggle("menu-items-card-description");
        menuItemsCardDescription[i].textContent = menuItemsCollection[i].description;
        menuItemsCard[i].appendChild(menuItemsCardDescription[i]);
        menuItemsList.appendChild(menuItemsCard[i]);
    }
    menuPageContainer.appendChild(menuItemsList);
    content.appendChild(menuPageContainer);
}