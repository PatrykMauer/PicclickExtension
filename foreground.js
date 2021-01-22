console.log("Injected");

var spans = document.querySelectorAll(".new");
var liArray = [];

for (i = 0; i < spans.length; i++) {
  liArray.push(
    spans[i].parentElement.parentElement.parentElement.parentElement
  );
}

function checkForMatch(array, propertyToMatch, valueToMatch, position) {
  for (var i = 0; i < position; i++) {
    if (array[i][propertyToMatch] == valueToMatch) return true;
  }
  return false;
}

var i;
if (typeof newListedArr === "undefined") {
  var newListedArr = [];
}

for (i = 0; i < liArray.length; i++) {
  if (
    checkForMatch(liArray, "id", liArray[i].id, i) ||
    checkForMatch(newListedArr, "id", liArray[i].id, newListedArr.length)
  )
    continue;
  liArray[i].setAttribute("itemprop", "isSimilarTo");
  liArray[i].setAttribute("itemscope", "");
  newListedArr.push(liArray[i].outerHTML);
}

console.log(newListedArr);

newListedArr = newListedArr;
