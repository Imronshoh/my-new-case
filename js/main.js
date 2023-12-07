var elInp = document.querySelector(".inp");
var elList = document.querySelector(".list");
var arr = [
  "mercedes",
  "BMW",
  "AUDI",
  "chevrolet",
  "RAVON",
  "bugatti",
  "BENTLEY",
];
function myFn() {
  for (var i = 0; i < arr.length; i++) {
    if (elInp.value == "katta" && arr[i].toUpperCase() == arr[i]) {
      var newLi = document.createElement("li");
      newLi.textContent = arr[i];
      elList.appendChild(newLi);
    } else if (elInp.value == "Katta" && arr[i].toUpperCase() == arr[i]) {
      var newLi = document.createElement("li");
      newLi.textContent = arr[i];
      elList.appendChild(newLi);
    } else if (elInp.value == "kichik" && arr[i].toLowerCase() == arr[i]) {
      var newLi = document.createElement("li");
      newLi.textContent = arr[i];
      elList.appendChild(newLi);
    } else if (elInp.value == "Kichik" && arr[i].toLowerCase() == arr[i]) {
      var newLi = document.createElement("li");
      newLi.textContent = arr[i];
      elList.appendChild(newLi);
    }
  }
}
