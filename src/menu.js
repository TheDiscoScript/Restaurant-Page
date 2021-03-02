//helper function (arg, arg2)
// creates div (need class?)
//classes for display flex
//->
// name of item (arg)(h3), prize (arg2)(p), phote (img)
// how to src img tho? `${arg}`
function helpItems(name, prize) {
  const divItem = document.createElement("div");
  divItem.classList.add("menuDivItem");

  const itemName = document.createElement("h3");
  itemName.textContent = name;

  const itemPrize = document.createElement("p");
  itemPrize.textContent = prize + ",- Kč";

  const itemPhoto = document.createElement("img");
  itemPhoto.src = `images/${name}.png`;

  divItem.appendChild(itemName);
  divItem.appendChild(itemPhoto);
  divItem.appendChild(itemPrize);

  return divItem;
}

function createMenuDiv() {
  const menuDiv = document.createElement("div");
  menuDiv.id = "midContentMenu";

  menuDiv.appendChild(helpItems("Ramen", "159"));
  menuDiv.appendChild(helpItems("Quesadilla", "159"));
  menuDiv.appendChild(helpItems("Massaman", "159"));
  menuDiv.appendChild(helpItems("Limonade", "65"));

  return menuDiv;
}
function renderMenu() {
  const mainContent = document.getElementById("midContent");
  //reset so content won't duplicate
  mainContent.textContent = "";
  mainContent.appendChild(createMenuDiv());
}
export default renderMenu;
