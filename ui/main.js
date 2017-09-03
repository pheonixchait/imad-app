console.log('Loaded!');

//changing content
var element = document.getElementById('main-text');
element.innerHTML='New Value';

//moving image
var img = document.getElementById('madi');

img.onclick = function()
{
   img.style.marginleft = '100px';  
};