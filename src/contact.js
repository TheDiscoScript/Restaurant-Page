//returns full div with content
function createContactDiv() {
  const contactDiv = document.createElement("div");
  const webAdressPar = document.createElement("p");
  const phonePar = document.createElement("p");
  const adressPar = document.createElement("p");
  const locationImg = document.createElement("img");
  locationImg.src = "./images/adressImg.png";

  contactDiv.id = "midContentContact";
  webAdressPar.innerHTML =
    'Web: <a href="https://www.skog.cz/">SKØG Urban Hub</a>';
  phonePar.textContent = "PHONE: +420 607 098 557";
  adressPar.textContent = " 5, Dominikánské nám. 187, 602 00 Brno-střed";

  contactDiv.appendChild(webAdressPar);
  contactDiv.appendChild(phonePar);
  contactDiv.appendChild(adressPar);
  contactDiv.appendChild(locationImg);

  return contactDiv;
}
//renders returned div
function renderContact() {
  const mainContent = document.getElementById("midContent");
  //reset so content won't duplicate
  mainContent.textContent = "";
  mainContent.appendChild(createContactDiv());
}

export default renderContact;
