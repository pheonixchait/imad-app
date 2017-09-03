console.log('Loaded!');

//changing content
var element = document.getElementById('main-text');
element.innerHTML='New Value';

//moving image
var img = document.getElementById('madi');
var leftMargin = 0;
function moveright()
{
   leftMargin = leftMargin + 1; 
   img.style.marginLeft = leftMargin + 'px';
}

img.onclick = function()
{
   var interval = setInterval(moveright,50); 
};