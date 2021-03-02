//returns full div with content
function createHomeDiv() {
  const homeDiv = document.createElement("div");
  const homePar = document.createElement("p");
  const homeImg = document.createElement("img");
  homeImg.src = "./images/skogSign.png";

  homeDiv.id = "midContentHome";
  homePar.textContent =
    "SKØG Urban Hub je brněnský víceúčelový koncept," +
    "který vznikl fúzí kavárny, baru, " +
    "pražírny a prostoru pro kulturní akce.";

  homeDiv.appendChild(homePar);
  homeDiv.appendChild(homeImg);

  return homeDiv;
}
//renders returned div
function renderHome() {
  const mainContent = document.getElementById("midContent");
  //reset so content won't duplicate
  mainContent.textContent = "";
  mainContent.appendChild(createHomeDiv());
}
export default renderHome;
