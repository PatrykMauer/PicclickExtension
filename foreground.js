var spans = document.querySelectorAll(".new");
var list=[];

for(i=0; i<spans.length;i++){
    list.push(spans[i].parentElement.parentElement.parentElement.parentElement)
}

function checkForMatch(array, propertyToMatch, valueToMatch, position){
    for(var i = 0; i < position; i++){
        if(array[i][propertyToMatch] == valueToMatch)
            return true;
    }
    return false;
}

var i;
var bodyHtml=`
<div class= "container-fluid">
    <ul class="items list-unstyled">`;
for(i=0; i<list.length;i++){
    if(checkForMatch(list,"id",list[i].id, i))
        continue;
    list[i].setAttribute("itemprop","isSimilarTo");
    list[i].setAttribute("itemscope",'');
    bodyHtml+= list[i].outerHTML;
}
bodyHtml+=`</ul></div>`;

document.body.innerHTML =bodyHtml;
