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
<div class="slider-wrapper pull-right" data-toggle="tooltip" data-placement="left" data-html="true" data-title="&lt;strong&gt;Zoom Thumbnails&lt;/strong&gt;&lt;br&gt;&lt;small&gt;PicClick Exclusive&lt;/small&gt;" data-original-title="" title=""><small><span class="glyphicon glyphicon-th" aria-hidden="true"></span></small><div id="slider" class="noUi-extended noUi-target noUi-rtl noUi-horizontal noUi-connect"><div class="noUi-base"><div class="noUi-origin noUi-background" style="left: 0%;"><div class="noUi-handle noUi-handle-upper"></div></div></div></div><span class="glyphicon glyphicon-th-large" aria-hidden="true"></span></div>
				</div>
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
