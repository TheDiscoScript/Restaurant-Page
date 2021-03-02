import renderHome from "./home";
import renderContact from "./contact";
import renderMenu from "./menu";

//function which creates upper part of content
function createUpper() {
  const upper = document.createElement("div");
  upper.id = "upper";

  const nameUpper = document.createElement("h1");
  nameUpper.textContent = "SKØG Urban Hub";
  upper.appendChild(nameUpper);

  //function to create navList + buttons
  function createNavigationList() {
    const nav = document.createElement("nav");

    const homeButton = document.createElement("button");
    homeButton.id = "homeButton";
    homeButton.className = "hvr-bob homeButton active"; //possibly add class "active"??
    homeButton.textContent = "Home";
    nav.appendChild(homeButton);
    addListenersToButtons(homeButton);

    const menuButton = document.createElement("button");
    menuButton.id = "menuButton";
    menuButton.className = "hvr-bob menuButton";
    menuButton.textContent = "Menu";
    nav.appendChild(menuButton);
    addListenersToButtons(menuButton);

    const contactButton = document.createElement("button");
    contactButton.id = "contactButton";
    contactButton.className = "hvr-bob contactButton";
    contactButton.textContent = "Contact";
    nav.appendChild(contactButton);
    addListenersToButtons(contactButton);

    return nav;
  }

  upper.appendChild(createNavigationList());
  return upper;
}

//function to create mid part of page
function createMid() {
  const mid = document.createElement("div");
  mid.id = "mid";
  const midContent = document.createElement("div");
  midContent.id = "midContent";
  mid.appendChild(midContent);
  return mid;
}

//function to create lower part of page
function createUnder() {
  const under = document.createElement("div");
  under.id = "under";

  const byParagraph = document.createElement("p");
  byParagraph.innerHTML =
    'By <a href="https://github.com/Willdooo">Willdooo</a>';

  under.appendChild(byParagraph);
  return under;
}
//HELPer functions
function resetActive(activeButton) {
  const buttons = document.querySelectorAll(".hvr-bob");
  buttons.forEach((activeButton) => {
    activeButton.classList.remove("active");
  });
}
function addListenersToButtons(specificButton) {
  specificButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      return;
    } else {
      resetActive();
      e.target.classList.add("active");
    }
    if (e.target.classList.contains("homeButton")) {
      renderHome();
    } else if (e.target.classList.contains("contactButton")) {
      renderContact();
    } else if (e.target.classList.contains("menuButton")) {
      renderMenu();
    }
  });
}

//function to export - rendering content of page
function renderContent() {
  const content = document.getElementById("content");
  content.appendChild(createUpper());
  content.appendChild(createMid());
  content.appendChild(createUnder());
  renderHome();
}

export default renderContent;
