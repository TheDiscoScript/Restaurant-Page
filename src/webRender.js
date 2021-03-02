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
    homeButton.className = "hvr-bob"; //possibly add class "active"??
    homeButton.textContent = "Home";
    nav.appendChild(homeButton);
    // TODO add e. listener - calls home function from home.js

    const menuButton = document.createElement("button");
    menuButton.id = "menuButton";
    menuButton.className = "hvr-bob";
    menuButton.textContent = "Menu";
    nav.appendChild(menuButton);
    //TODO

    const contactButton = document.createElement("button");
    contactButton.id = "contactButton";
    contactButton.className = "hvr-bob";
    contactButton.textContent = "Contact";
    nav.appendChild(contactButton);
    //TODO

    return nav;
  }

  upper.appendChild(createNavigationList());
  return upper;
}

//function to create mid part of page
function createMid() {
  const mid = document.createElement("div");
  mid.id = "mid";
  mid.textContent = 1;
  return mid;
}

//function to create lower part of page
function createUnder() {
  const under = document.createElement("div");
  under.id = "under";

  const byParagraph = document.createElement("p");
  /* let str = "By Willdooo";
  let strUrl = str.link("byParagraph.appendChild(a)");*/
  byParagraph.innerHTML =
    'By <a href="https://github.com/Willdooo">Willdooo</a>';

  under.appendChild(byParagraph);
  return under;
}
//function to check active button

//function to export - rendering content of page
function renderContent() {
  const content = document.getElementById("content");
  content.appendChild(createUpper());
  content.appendChild(createMid());
  content.appendChild(createUnder());
}

export default renderContent;
