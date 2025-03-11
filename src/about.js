export const createAboutPage = () => {
    content.textContent = "";
    const aboutPageContainer = document.createElement("div");
    aboutPageContainer.setAttribute("id", "about-page-container");
    const aboutParagraph = document.createElement("div");
    aboutParagraph.classList.toggle("about-page-paragraph");
    aboutParagraph.textContent = "As part of The Odin Project’s curriculum, this project focuses on JavaScript’s DOM manipulation, modular coding practices, and Webpack.";
    aboutPageContainer.appendChild(aboutParagraph);
    content.appendChild(aboutPageContainer);
}