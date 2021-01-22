var bodyHtml = `
<div class= "container-fluid">
    <ul class="items list-unstyled">`;

console.log("display!");
console.log(newListedArr);

bodyHtml += newListedArr;

bodyHtml += `</ul></div>`;

console.log(bodyHtml);

document.body.innerHTML = bodyHtml;
