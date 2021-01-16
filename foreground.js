var spans = document.querySelectorAll(".new");

// var li = spans[0].parentElement.parentElement.parentElement.parentElement;
// console.log(li);

// document.body.innerHTML =`
// <ul class="items list-unstyled">
// ${li.innerHTML}
// </ul>`;


var i;
var bodyHtml=`<ul class="items list-unstyled">`;
for(i=0; i<spans.length;i++){
   bodyHtml+= spans[i].parentElement.parentElement.parentElement.parentElement.innerHTML;
}
bodyHtml+=`</ul>`;

document.body.innerHTML =bodyHtml;
