var bodyHtml = `
<div class= "container-fluid">
    <ul class="items list-unstyled">`;

console.log("display!");

for (i = 0; i < newListedArr.length; i++) {
  bodyHtml += newListedArr[i].outerHTML;
}
bodyHtml += `</ul></div>`;

console.log(bodyHtml);

document.body.innerHTML = bodyHtml;
