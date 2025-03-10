import restaurantImage from "./resources/restaurant-image.jpg";

function createHomePage(){
    content.textContent = "";
    const homePageContainer = document.createElement("div");
    homePageContainer.classList.toggle("home-page-container");
    const heroImage = document.createElement("img");
    heroImage.src = restaurantImage;
    heroImage.setAttribute("id", "hero-image");
    homePageContainer.appendChild(heroImage);
    const heading = document.createElement("h1");
    heading.classList.toggle("home-page-heading");
    heading.textContent = "This is the Homepage of the Restaurant Website";
    homePageContainer.appendChild(heading);
    const paragraph = document.createElement("p");
    paragraph.classList.toggle("home-page-paragraph");
    paragraph.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, atque vel iusto sit, corporis natus explicabo tempora temporibus minima officiis nulla deleniti, accusantium repudiandae eligendi cupiditate nam pariatur. Pariatur, dolorem."
    homePageContainer.appendChild(paragraph);
    content.appendChild(homePageContainer);
}

export {createHomePage};