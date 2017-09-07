//console.log('Loaded!');

//changing content
//var element = document.getElementById('main-text');
//element.innerHTML='New Value';

//moving image
//var img = document.getElementById('madi');
//var leftMargin = 0;
//function moveright()
//{
   //leftMargin = leftMargin + 1; 
   //img.style.marginLeft = leftMargin + 'px';
//}

//img.onclick = function()
//{
  // var interval = setInterval(moveright,50); 
//};

var button = document.getElementById('counter');
var counter = 0;
button.onclick = function()
{
    //Render the variable to correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
};