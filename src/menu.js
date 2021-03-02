//helper function

function createMenuDiv() {
  const menuDiv = document.createElement("div");
  menuDiv.id = "midContentMenu";

  const item0 = document.createElement("div");
  const item1 = document.createElement("div");
  const item2 = document.createElement("div");
  const item3 = document.createElement("div");

  item0.textContent = "0";
  item1.textContent = "1";
  item2.textContent = "2";
  item3.textContent = "3";

  menuDiv.appendChild(item0);
  menuDiv.appendChild(item1);
  menuDiv.appendChild(item2);
  menuDiv.appendChild(item3);
  return menuDiv;
}
function renderMenu() {
  const mainContent = document.getElementById("midContent");
  //reset so content won't duplicate
  mainContent.textContent = "";
  mainContent.appendChild(createMenuDiv());
}
export default renderMenu;
